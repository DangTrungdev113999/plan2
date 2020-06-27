import {
  LOG_IN,
  LOG_OUT,
  LOG_IN_SUCCEEDED,
  LOG_OUT_SUCCEEDED,
} from './constants';

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

export const logout = (payload = {}) => ({
  type: LOG_OUT,
  payload,
});

export const logoutSucceeded = (payload = {}) => ({
  type: LOG_OUT_SUCCEEDED,
  payload,
});
