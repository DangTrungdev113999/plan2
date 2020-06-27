/* eslint-disable curly */
import {takeEvery, call, put, delay, select} from 'redux-saga/effects';
import {LOG_IN, LOG_OUT} from './constants';
import {login, logout} from './apis';
import {loginSucceeded, loginFailed, logoutSucceeded} from './action';

function* loginSideEffect({payload}) {
  try {
    const response = yield call(login, payload);
    yield delay(1000);
    yield put(loginSucceeded(response));
    if (payload.onSuccess) yield call(payload.onSuccess, response);
  } catch (error) {
    yield delay(1000);
    yield put(loginFailed(error));
    if (payload.onError) yield call(payload.onError, error);
  }
}

function* logoutSideEffect() {
  try {
    const token = yield select((state) => state.auth.token);
    yield put(logoutSucceeded());
    yield call(logout, {token});
  } catch (error) {
    console.log(error);
  }
}

export default function* authSaga() {
  yield takeEvery(LOG_IN, loginSideEffect);
  yield takeEvery(LOG_OUT, logoutSideEffect);
}
