import { ErrorWithErrorAttribute, OnErrorHook } from './types';
import { AxiosError } from 'axios';

/**
 * This middleware attempts to extract the data from the original response
 */
export const withAxiosErrorMessage: OnErrorHook = (err: any) => {
  const e: AxiosError = err;
  const eWithError: ErrorWithErrorAttribute = e;

  eWithError.text = JSON.stringify(`${e.message}\n${e.response?.data}`, null, 2);
  eWithError.message = `Error: ${e.response?.data?.message}`;
  eWithError.error = eWithError;

  return [eWithError];
};
