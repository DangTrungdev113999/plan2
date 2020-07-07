/* eslint-disable curly */
import {call, delay, put, select, takeEvery} from 'redux-saga/effects';
import {
  loginFailed,
  loginSucceeded,
  logoutSucceeded,
  signUpSucceeded,
  signUpFailed,
} from './action';
import {login, logout, signUp} from './apis';
import {LOG_IN, LOG_OUT, SIGN_UP} from './constants';

function* loginSideEffect({payload}) {
  try {
    const response = yield call(login, payload);
    yield delay(100);
    yield put(loginSucceeded(response));
    if (payload.onSuccess) yield call(payload.onSuccess, response);
  } catch (error) {
    yield delay(100);
    yield put(loginFailed(error));
    if (payload.onError) yield call(payload.onError, error);
  }
}

function* logoutSideEffect() {
  try {
    const token = yield select((state) => state.auth.token);
    const response = yield call(logout, {token});
    yield put(logoutSucceeded(response));
  } catch (error) {
    console.log(error);
  }
}

function* signUpSideEffect({payload}) {
  try {
    const response = yield call(signUp, payload);
    console.log({response});
    yield delay(100);
    yield put(signUpSucceeded(response));
    if (payload.onSuccess) yield call(payload.onSuccess, response);
  } catch (error) {
    yield delay(100);
    yield put(signUpFailed(error));
    if (payload.onError) yield call(payload.onError, error);
  }
}

export default function* authSaga() {
  yield takeEvery(LOG_IN, loginSideEffect);
  yield takeEvery(LOG_OUT, logoutSideEffect);
  yield takeEvery(SIGN_UP, signUpSideEffect);
}
