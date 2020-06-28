import {takeEvery, select, put, delay, call} from 'redux-saga/effects';
import {FETCH_PROFILE} from './constants';
import {fetchProfile} from './apis';
import {fetchProfileSucceeded, fetchProfileFailded} from './actions';
function* fetchProfileSideEffect() {
  try {
    const token = yield select((state) => state.auth.token);
    yield delay(500);
    const response = yield call(fetchProfile, {token});
    yield put(fetchProfileSucceeded(response));
  } catch (error) {
    yield delay(500);
    yield put(fetchProfileFailded(error));
  }
}

export default function* userSaga() {
  yield takeEvery(FETCH_PROFILE, fetchProfileSideEffect);
}
