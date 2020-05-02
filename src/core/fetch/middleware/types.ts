import { FetchOptions } from '../types';

export interface BeforeFetchHook {
  (url: string, options: FetchOptions): [string, FetchOptions];
}

export interface AfterFetchHook {
  (response: Response | any, data: object): Promise<[Response | any, object]>;
}

export interface OnErrorHook {
  (err: Error): [ErrorWithErrorAttribute];
}

export interface ErrorWithErrorAttribute extends Error {
  error?: any;
  text?: any;
}
