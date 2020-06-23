import {LOG_IN, LOG_OUT} from '~/constants/auth';

export const login = () => ({
  type: LOG_IN,
});

export const logout = () => ({
  type: LOG_OUT,
});
