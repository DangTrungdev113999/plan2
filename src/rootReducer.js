import {combineReducers} from 'redux';
import authReducer from '~/modules/auth/reducer';
import homeReducer from '~/modules/home/reducer';
import userReducer from '~/modules/user/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  user: userReducer,
});

export default rootReducer;
