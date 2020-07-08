/* eslint-disable curly */
import {call, delay, put, select, takeEvery} from 'redux-saga/effects';
import {
  loginFailed,
  loginSucceeded,
  logoutSucceeded,
  signUpSucceeded,
  signUpFailed,
  setPasswordSucceeded,
  setPasswordFailded,
} from './action';
import {login, logout, signUp, setPassword} from './apis';
import {LOG_IN, LOG_OUT, SIGN_UP, SET_PASSWORD} from './constants';

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
    yield delay(100);
    yield put(signUpSucceeded(response));
    if (payload.onSuccess) yield call(payload.onSuccess, response);
  } catch (error) {
    yield delay(100);
    yield put(signUpFailed(error));
    if (payload.onError) yield call(payload.onError, error);
  }
}

function* setPasswordEffect({payload}) {
  try {
    const token = yield select((state) => state.auth.token);
    const response = yield call(setPassword, {
      token,
      ...payload,
    });
    yield delay(100);
    yield put(setPasswordSucceeded());
    if (payload.onSuccess) yield call(payload.onSuccess, response);
  } catch (error) {
    yield delay(100);
    yield put(setPasswordFailded(error));
    if (payload.onError) yield call(payload.onError, error);
  }
}

export default function* authSaga() {
  yield takeEvery(LOG_IN, loginSideEffect);
  yield takeEvery(LOG_OUT, logoutSideEffect);
  yield takeEvery(SIGN_UP, signUpSideEffect);
  yield takeEvery(SET_PASSWORD, setPasswordEffect);
}
