/* eslint-disable curly */
import {takeEvery, call, delay, put, select} from 'redux-saga/effects';
import {FECTH_CATEGORY, FETCH_IMAGES} from './constants';
import {
  fetchCategorySucceeded,
  fetchCategoryFailed,
  fetchImagesSucceeded,
  fetchImagesFailed,
} from './action';
import {fetchCategory, fetchImages} from './apis';

function* fetchCategorySideEffect() {
  try {
    const token = yield select((state) => state.auth.token);
    const response = yield call(fetchCategory, {token});
    yield delay(100);
    yield put(fetchCategorySucceeded(response));
  } catch (error) {
    yield delay(100);
    yield put(fetchCategoryFailed(error));
  }
}

function* fetchImagesSideEffect() {
  try {
    const token = yield select((state) => state.auth.token);
    const response = yield call(fetchImages, {token});
    yield delay(100);
    yield put(fetchImagesSucceeded(response));
  } catch (error) {
    yield delay(100);
    yield put(fetchImagesFailed(error));
  }
}

export default function* homeSage() {
  yield takeEvery(FECTH_CATEGORY, fetchCategorySideEffect);
  yield takeEvery(FETCH_IMAGES, fetchImagesSideEffect);
}
