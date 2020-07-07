import {
  LOG_IN,
  LOG_OUT,
  LOG_IN_SUCCEEDED,
  LOG_OUT_SUCCEEDED,
  SIGN_UP,
  SIGN_UP_SUCCEEDED,
  SIGN_UP_FAILED,
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

export const signUp = (payload = {}) => ({
  type: SIGN_UP,
  payload,
});

export const signUpSucceeded = (payload = {}) => ({
  type: SIGN_UP_SUCCEEDED,
  payload,
});

export const signUpFailed = (payload = {}) => ({
  type: SIGN_UP_FAILED,
  payload,
});
