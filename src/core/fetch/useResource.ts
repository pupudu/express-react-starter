import { useState } from 'react';
import logger from 'loglevel';
import { fetch } from './fetch';
import { FetchConfig, getConfigKey } from './useFetch';
import { getCacheVisitor } from './resourceCache';

type ResourceOptions<T> = {
  idle: boolean;
  defaultValue?: T;
};

type FetchSettings = {
  force?: boolean;
};

const defaultOptions = {
  idle: false,
  defaultValue: undefined,
};

enum FETCH_STATUSES {
  INIT = 'INIT',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface Resource<T = any> {
  read(): undefined | T;
  fetch(options?: FetchConfig): Promise<T | undefined>;
  reset(preserveCache?: boolean): void;
  isFetching(): boolean;
  hasFetched(): boolean;
  clear(): void;
}

/**
 * This hook creates a suspense ready fetch resource.
 *
 * The fetch call will be triggered immediately by default (idle = false) (AKA suspense mode)
 * We can opt out from this behavior by setting the `idle` to `true`.
 *
 * Calling this hook only returns a resource object.
 * Users need to call one of the resource methods to actually use the resource data.
 *
 * ** read() **
 * ~~~~~~~~~~
 * Calling the read method in suspense mode(idle=false) will do one of two things.
 * 1. If the data has already been fetched, this will return the data.
 * 2. If the data has not been fetched yet, this will throw a promise which will be caught by the Suspense Guard.
 *
 * Calling `read` in non-suspense mode will return the defaultValue in the first render.
 * To actually trigger the fetch call and get the data, we need to call the `fetch()` method imperatively.
 *
 * ** fetch() **
 * ~~~~~~~~~~~~~
 * As mentioned above, if there are read() calls dependent on the corresponding resource, they will trigger
 * suspense when this method is called.
 *
 * The fetch() method is also useful to trigger a resource in an imperative way (eg: In an event listener).
 * For example, We can define a resource with idle=true, and actually trigger the fetch call from a button click.
 *
 * Users can also pass in an optional options argument to this method which will be merged with the original fetch options
 *
 * ** reset() **
 * ~~~~~~~~~~~
 * Clear the cache in suspense mode and trigger another fetch call.
 * That is, the read method usages will throw a promise (again) which will be caught by the Suspense guard
 *
 * ** isFetching() ** (non-suspense mode only)
 * ~~~~~~~~~~~~~~~~
 * Check if the fetch call is in progress
 *
 * ** hasFetched() ** (non-suspense mode only)
 * ~~~~~~~~~~~~~~~~
 * Check if the fetch call has started and finished successfully
 */
export function useResource<T = any>(
  config: FetchConfig,
  resourceOptions: ResourceOptions<T> = defaultOptions,
): Resource<T> {
  const { idle, defaultValue } = resourceOptions;
  const [fetchStatus, setFetchStatus] = useState(FETCH_STATUSES.INIT);

  const cacheVisitor = getCacheVisitor<T>(getConfigKey(config));

  const fetchCall = async (overrideOptions: object = {}, settings: FetchSettings = {}) => {
    const mergedConfig = { ...config, ...overrideOptions };
    const entry = cacheVisitor.get();

    if (!settings.force && (entry.value || entry.promise)) {
      return;
    }

    logger.debug('Calling endpoint', mergedConfig);

    fetchStatus !== FETCH_STATUSES.IN_PROGRESS && setFetchStatus(FETCH_STATUSES.IN_PROGRESS);

    try {
      const { ref, ...options } = mergedConfig;
      cacheVisitor.put(await fetch(options));
    } catch (e) {
      cacheVisitor.put(e);
    }

    setFetchStatus(FETCH_STATUSES.DONE);
  };

  // Activate the fetch call immediately in suspense mode (if not active already)
  if (!idle && !cacheVisitor.get().value) {
    cacheVisitor.put(fetchCall());
  }

  return {
    read: () => {
      const entry = cacheVisitor.readValue();
      if (entry.promise) {
        throw entry.promise;
      }
      return entry.value ?? defaultValue;
    },
    fetch: async (options) => {
      // First we check if there is a promise already, so that we don't make multiple fetch calls unnecessarily
      const fetch = cacheVisitor.get().promise ?? fetchCall(options, { force: true });

      cacheVisitor.put(fetch);
      await fetch;

      return cacheVisitor.readValue().value;
    },
    clear: () => {
      cacheVisitor.clear();
    },
    reset: (preserveCache = false) => {
      if (!preserveCache) {
        cacheVisitor.clear();
        cacheVisitor.put(fetchCall());
      } else {
        fetchCall({}, { force: true }).then();
      }
    },
    isFetching: () => {
      return fetchStatus === FETCH_STATUSES.IN_PROGRESS;
    },
    hasFetched: () => {
      return fetchStatus === FETCH_STATUSES.DONE;
    },
  };
}

/**
 * This is a wrapping hook for useResource, intended for creating idle resources
 * such as the ones you would activate from an event listener
 */
export function useIdleResource<T = any>(defaultValue?: T): Resource<T> {
  // Derive a random config key and bind to state
  const [configKey] = useState(`fetch-${Math.random()}`);

  return useResource<T>(
    { url: '', key: configKey },
    {
      idle: true,
      defaultValue,
    },
  );
}
