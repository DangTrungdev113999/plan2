/* eslint-disable no-fallthrough */
import produce from 'immer';
import {REHYDRATE} from 'redux-persist';
import {
  LOG_IN,
  LOG_IN_FAILED,
  LOG_IN_SUCCEEDED,
  LOG_OUT_SUCCEEDED,
  SIGN_UP,
  SIGN_UP_SUCCEEDED,
  SIGN_UP_FAILED,
  SET_PASSWORD_FAILDED,
  SET_PASSWORD,
  SET_PASSWORD_SUCCEEDED,
} from './constants';

const initState = {
  token: '',
  signUpLoading: false,
  signUpError: '',
  loginLoading: false,
  loginError: '',
  setPasswordLoading: false,
  setPasswordError: '',
};

const authReducer = produce((draft, action) => {
  switch (action.type) {
    case SIGN_UP:
      draft.signUpLoading = true;
      draft.signUpError = '';
      break;
    case SIGN_UP_SUCCEEDED:
      draft.signUpLoading = false;
      draft.token = action.payload;
      break;
    case SIGN_UP_FAILED:
      draft.signUpLoading = false;
      draft.signUpError = action.payload;
      break;

    case LOG_IN:
      draft.loginLoading = true;
      draft.loginError = '';
      break;
    case LOG_IN_SUCCEEDED:
      draft.token = action.payload;
      draft.loginLoading = false;
      break;
    case LOG_IN_FAILED:
      draft.loginLoading = false;
      draft.loginError = action.payload;
      break;

    case LOG_OUT_SUCCEEDED:
      draft.token = action.payload;
      break;

    case SET_PASSWORD:
      draft.setPasswordLoading = true;
      draft.setPasswordError = '';
      break;
    case SET_PASSWORD_SUCCEEDED:
      draft.setPasswordLoading = false;
      break;
    case SET_PASSWORD_FAILDED:
      draft.setPasswordLoading = false;
      draft.setPasswordError = action.payload;
      break;

    case REHYDRATE:
      console.log({tokenREHYDRATE: action?.payload?.auth?.token});
      draft.token = action?.payload?.auth?.token ?? initState.token;
      break;
  }
}, initState);

export default authReducer;
