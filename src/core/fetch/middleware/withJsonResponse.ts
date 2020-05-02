import { AfterFetchHook } from './types';
import logger from 'loglevel';

/**
 * This middleware attempts to extract the data from the original response in JSON format
 *
 * If an error is thrown, it will get the textual version of the error and append it to the error.
 * This is usually helpful when the actual response is not a JSON
 */
export const withJsonResponse: AfterFetchHook = async (response, data) => {
  const clone = response.clone();
  try {
    data = await clone.json();
  } catch (err) {
    // Create another clone and extract the text error
    // This is mainly to catch responses which are not in json format
    const clone2 = response.clone();
    err.text = await clone2.text();

    // Log raw error and text error
    logger.error('raw error:', err);
    logger.error('text error:', err.text);

    throw err;
  }

  return [response, data];
};
