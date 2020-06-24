/* eslint-disable no-fallthrough */
import produce from 'immer';
import {LOG_IN, LOG_OUT, LOG_IN_SUCCEEDED, LOG_IN_FAILED} from './constants';

const initState = {
  token: false,
  loginLoading: false,
  loginError: '',
};

const authReducer = produce((draft, action) => {
  switch (action.type) {
    case LOG_IN:
      draft.loginLoading = true;
      draft.loginError = '';
    case LOG_IN_SUCCEEDED:
      draft.loginLoading = false;
      draft.loginError = '';
      draft.token = action.payload;
    case LOG_IN_FAILED:
      draft.loginLoading = false;
      draft.loginError = action.payload;
      draft.token = false;

    case LOG_OUT:
      draft.token = false;
  }
}, initState);

export default authReducer;
