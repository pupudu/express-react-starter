import { fetch } from './fetch';
import { useState } from 'react';
import { FetchOptions } from './types';

const cacheMap = new Map();

export interface FetchRef {
  __REF: {
    configKey?: string;
  };
  reset(): void;
  setConfigKey: (string) => void;
}

export type FetchConfig = FetchOptions & {
  key?: string;
  url: string;
  ref?: FetchRef;
};
type UseLayoutFetchConfig = FetchConfig | FetchConfig[];

/**
 * Use this hook to get a reference to the fetch calls in useFetch

 // Initialize hook
 const ref = useFetchRef();

 // Pass the ref to the target fetch object
 const [data] = useFetch([{ url: '<url>', ref }]);

 // Now you can use the `ref` to trigger effects on the corresponding fetch action
 // For example, to reset the fetch call
 ref.reset();
 */
export const useFetchRef = () => {
  const [, setState] = useState();

  const ref: FetchRef = {
    __REF: {},
    reset: function () {
      ref.__REF.configKey && cacheMap.delete(ref.__REF.configKey);
      setState(Math.random());
    },
    setConfigKey: (configKey) => (ref.__REF.configKey = configKey),
  };

  return ref;
};

export function getConfigKey(configBase) {
  const { key, ref, ...config } = configBase;
  if (key) return key;
  return JSON.stringify(config);
}

/**
 * Use this hook for simple data fetching requirements.
 *
 * Simply pass a config object, and the hook will return the data for you.
 * {
 *     url: string // api endpoint to be called
 *     params: string // path parameters or query parameters as required
 *     body: any // request body as a json
 *     headers: any // request headers as a json
 * }
 *
 * If you want to do multiple fetch calls, simply pass an array of config objects, and the hook will return
 * the results as an array, in the same order.
 *
 * If one or more requests throw an error, the hook will catch it and rethrow it to be caught by the
 * React Error Boundary. So you don't have to handle errors by yourself.
 */
export function useFetch<T = any>(baseConfig: UseLayoutFetchConfig): T {
  const configs = Array.isArray(baseConfig) ? baseConfig : [baseConfig];

  // Check if at least one of the entries have errors
  const errors = configs
    .map((config) => cacheMap.get(getConfigKey(config)))
    .filter((entry: any) => entry instanceof Error);

  // If there's at least one error, we combine them and throw them as a single compound error
  // this compound error is processed by the Error boundary to show all the errors in a nice little table
  if (errors.length) {
    const err = new Error('One or more fetch calls failed');
    (err as any).errorArray = errors;
    throw err;
  }

  // If all config objects have corresponding cached values, we return them
  if (configs.every((config) => cacheMap.get(getConfigKey(config)))) {
    const results = configs.map((config) => {
      // If a fetch reference was set for this config, we attach the configKey to the ref
      config.ref && config.ref.setConfigKey(getConfigKey(config));

      // Return the cached data
      return cacheMap.get(getConfigKey(config));
    });

    // Return an array of results or a single result based on the original argument type
    return Array.isArray(baseConfig) ? results : results[0];
  }

  // If at least one config object doesn't have cached data, we throw a promise which will fetch the data as required
  throw Promise.all(
    configs.map(async (configRaw) => {
      const { ref, ...options } = configRaw;
      const configKey = getConfigKey(configRaw);

      // If cache has data, no need to fetch again
      if (cacheMap.get(configKey)) return;

      // We attempt to fetch the results
      // If the fetch call throws, we catch it and set it on the corresponding configKey
      // Those error entries will be picked up by the next render cycle
      let result;
      try {
        result = await fetch(options);
      } catch (e) {
        result = e;
      }

      cacheMap.set(configKey, result);
    }),
  );
}
