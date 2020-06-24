/* eslint-disable curly */
import {takeEvery, call, put, delay} from 'redux-saga/effects';
import {LOG_IN} from './constants';
import {login} from './apis';
import {loginSucceeded, loginFailed} from './action';

function* loginSideEffcet({payload}) {
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

export default function* authSaga() {
  yield takeEvery(LOG_IN, loginSideEffcet);
}
