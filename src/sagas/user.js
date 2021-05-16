import { put, delay, takeLatest } from "redux-saga/effects";
import { createUser } from "../libs/util/dummyCreator";
import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
} from "../reducers/user";

function* loadUserSaga() {
  try {
    yield delay(100);
    const res = createUser();
    yield put({ type: LOAD_USER_SUCCESS, user: res });
  } catch (error) {
    yield put({ type: LOAD_USER_FAILURE, error });
  }
}

export function* watchUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUserSaga);
}
