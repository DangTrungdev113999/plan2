/* eslint-disable no-fallthrough */
import produce from 'immer';
import {
  LOG_IN,
  LOG_IN_SUCCEEDED,
  LOG_IN_FAILED,
  LOG_OUT_SUCCEEDED,
} from './constants';
import {REHYDRATE} from 'redux-persist';

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
      break;
    case LOG_IN_SUCCEEDED:
      draft.loginLoading = false;
      draft.token = action.payload;
      break;
    case LOG_IN_FAILED:
      draft.loginLoading = false;
      draft.loginError = action.payload;
      break;

    case LOG_OUT_SUCCEEDED:
      draft.token = false;
      break;

    // case REHYDRATE:
    //   draft.token = action?.payload?.auth?.token ?? initState.token;
    //   break;
  }
}, initState);

export default authReducer;
