import {fromJS} from 'immutable';
import {LOG_IN, LOG_OUT} from '~/constants/auth';

const initState = {
  token: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {...state, token: true};

    case LOG_OUT:
      return {...state, token: false};

    default:
      return state;
  }
};

export default authReducer;
