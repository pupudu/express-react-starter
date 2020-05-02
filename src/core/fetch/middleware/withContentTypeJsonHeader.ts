import { BeforeFetchHook } from './types';

/**
 * Assume only json requests will be sent by default
 * But still, it can be overridden if Content-Type header is passed intentionally
 */
export const withContentTypeJsonHeader: BeforeFetchHook = (url, options) => {
  return [
    url,
    {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    },
  ];
};
