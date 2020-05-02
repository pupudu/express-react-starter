import { BeforeFetchHook } from './types';

let count;
const interval = 5000;
const limit = 50;

setInterval(() => {
  count = 0;
}, interval);

/**
 * Limit the number of fetch calls allowed in a given interval of time
 */
export const withRateLimit: BeforeFetchHook = (url, options) => {
  count++;
  if (count > limit) {
    throw new Error(
      `Too many attempts to make API calls.\n` +
        `To devs: Check application code, increase the request limit, or change the window interval.\n` +
        `${JSON.stringify({ count, interval, url, options, limit }, null, 2)}`,
    );
  }
  return [url, options];
};
