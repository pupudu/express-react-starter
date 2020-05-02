import { AfterFetchHook } from './types';
import { AxiosResponse } from 'axios';

/**
 * This middleware attempts to extract the data from the original response
 */
export const withAxiosResponseData: AfterFetchHook = async (response: AxiosResponse, data) => {
  return [response, response.data];
};
