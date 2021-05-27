import { put, delay, takeLatest } from "redux-saga/effects";
import { createUser } from "../libs/util/dummyCreator";
import {
  LOAD_BOARD_REQUEST,
  LOAD_BOARD_SUCCESS,
  LOAD_BOARD_FAILURE,
  LOAD_BOARD_LIST_SUCCESS,
  LOAD_BOARD_LIST_FAILURE,
  LOAD_BOARD_LIST_REQUEST,
} from "../reducers/board";

function* loadBoardSaga() {
  try {
    yield delay(100);
    // const res = createUser();
    const res = localStorage.getItem("currentBoard");
    yield put({ type: LOAD_BOARD_SUCCESS, board: JSON.parse(res) });
  } catch (error) {
    yield put({ type: LOAD_BOARD_FAILURE, error });
  }
}

function* loadBoardListSaga(action) {
  try {
    yield delay(100);
    // const res2 = yield call(`api/createBoard/${action.createUser}`, {})
    const res = createUser();
    yield put({ type: LOAD_BOARD_LIST_SUCCESS, boardList: res });
  } catch (error) {
    yield put({ type: LOAD_BOARD_LIST_FAILURE, error });
  }
}

export function* watchBoard() {
  yield takeLatest(LOAD_BOARD_REQUEST, loadBoardSaga);
  yield takeLatest(LOAD_BOARD_LIST_REQUEST, loadBoardListSaga);
}
