import {all} from 'redux-saga/effects';
import authSaga from '~/modules/auth/saga';
import homeSage from '~/modules/home/saga';
import userSaga from '~/modules/user/saga';

export default function* rootSaga() {
  yield all([authSaga(), homeSage(), userSaga()]);
}
