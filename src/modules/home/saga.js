/* eslint-disable curly */
import {takeEvery, call, delay, put, select} from 'redux-saga/effects';
import {FECTH_CATEGORY, FETCH_IMAGES, FETCH_PRODUCT} from './constants';
import {
  fetchCategorySucceeded,
  fetchCategoryFailed,
  fetchImagesSucceeded,
  fetchImagesFailed,
  fetchProductSucceeded,
  fetchProductFailed,
} from './action';
import {fetchCategory, fetchImages, fetchProduct} from './apis';

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
    yield delay(300);
    yield put(fetchImagesSucceeded(response));
  } catch (error) {
    yield delay(300);
    yield put(fetchImagesFailed(error));
  }
}

function* fetchProductSideEffect({payload}) {
  try {
    const token = yield select((state) => state.auth.token);
    const response = yield call(fetchProduct, {token, id: payload.id});
    yield delay(300);
    yield put(fetchProductSucceeded(response));
  } catch (error) {
    yield delay(300);
    yield put(fetchProductFailed(error));
  }
}

export default function* homeSage() {
  yield takeEvery(FECTH_CATEGORY, fetchCategorySideEffect);
  yield takeEvery(FETCH_IMAGES, fetchImagesSideEffect);
  yield takeEvery(FETCH_PRODUCT, fetchProductSideEffect);
}
