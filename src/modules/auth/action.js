import {LOG_IN, LOG_OUT, LOG_IN_SUCCEEDED} from './constants';

export const login = (payload = {}) => ({
  type: LOG_IN,
  payload,
});

export const loginSucceeded = (payload = {}) => ({
  type: LOG_IN_SUCCEEDED,
  payload,
});

export const loginFailed = (payload = {}) => ({
  type: LOG_IN_SUCCEEDED,
  payload,
});

export const logout = () => ({
  type: LOG_OUT,
});
