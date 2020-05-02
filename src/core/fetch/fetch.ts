import {
  addHookToRunAfterFetch,
  addHookToRunBeforeFetch,
  addHookToRunOnError,
  doFetch,
} from './api';
import { withHttpErrors } from './middleware/withHttpErrors';
import { withAxiosResponseData } from './middleware/withAxiosResponseData';
import { withUrlQueryParams } from './middleware/withUrlQueryParams';
import { withContentTypeJsonHeader } from './middleware/withContentTypeJsonHeader';
import { withRateLimit } from './middleware/withRateLimit';
import { FetchConfig } from './useFetch';
import { withAxiosErrorMessage } from './middleware/withAxiosErrorMessage';

/**
 * Register middleware to run before the fetch call
 */
addHookToRunBeforeFetch(withRateLimit);
addHookToRunBeforeFetch(withContentTypeJsonHeader);
addHookToRunBeforeFetch(withUrlQueryParams);

/**
 * Register middleware to run after the fetch call
 */
addHookToRunAfterFetch(withAxiosResponseData);
addHookToRunAfterFetch(withHttpErrors);

/**
 * Register middleware to run on fetch errors
 */
addHookToRunOnError(withAxiosErrorMessage);

/**
 * Use this imperative function to fetch data in response to events such as user clicks,
 * and for posting data to the API.
 *
 * Use the useFetch hook for fetching data from the API.
 * useFetch also uses this function internally to do its thing
 */
export const fetch = async (config: FetchConfig) => {
  const { url, ...options } = config;
  const [, data] = await doFetch(url, options);
  return data;
};
