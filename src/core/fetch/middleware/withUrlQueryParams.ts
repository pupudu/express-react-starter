import { parseParam } from '../api';
import { BeforeFetchHook } from './types';

/**
 * This middleware will alter the original URL by appending URL query params derived from the params object.
 * This makes it possible to pass query params as an object, rather than hardcoded in the URL
 */
export const withUrlQueryParams: BeforeFetchHook = (url, options) => {
  const searchParams = new URLSearchParams();

  // Build searchParams object using query key-value pairs
  Object.entries(options.params || {}).forEach(([key, param]) => {
    if (param !== false && param !== undefined && param !== null) {
      searchParams.append(key, parseParam(param as object | string));
    }
  });

  // Extract query string
  url = `${url}?${searchParams.toString()}`;

  return [url, options];
};
