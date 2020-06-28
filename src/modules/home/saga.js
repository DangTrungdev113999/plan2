/* eslint-disable curly */
import {takeEvery, call, delay, put, select} from 'redux-saga/effects';
import {FECTH_CATEGORY} from './constants';
import {fetchCategorySucceeded, fetchCategoryFailed} from './action';
import {fetchCategory} from './apis';

function* fetchCategorySideEffect({payload}) {
  try {
    const token = yield select((state) => state.auth.token);
    const response = yield call(fetchCategory, {token});
    yield delay(500);
    yield put(fetchCategorySucceeded(response));
  } catch (error) {
    yield delay(500);
    yield put(fetchCategoryFailed(error));
  }
}

export default function* homeSage() {
  yield takeEvery(FECTH_CATEGORY, fetchCategorySideEffect);
}
