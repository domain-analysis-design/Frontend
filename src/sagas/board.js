import { put, delay, takeLatest } from "redux-saga/effects";
import { createUser } from "../libs/util/dummyCreator";
import {
  LOAD_BOARD_REQUEST,
  LOAD_BOARD_SUCCESS,
  LOAD_BOARD_FAILURE,
  LOAD_BOARD_LIST_SUCCESS,
  LOAD_BOARD_LIST_FAILURE,
  LOAD_BOARD_LIST_REQUEST,
  ADD_BOARD_REQUEST,
  ADD_BOARD_SUCCESS,
  ADD_BOARD_FAILURE,
  DELETE_BOARD_REQUEST,
  DELETE_BOARD_SUCCESS,
  DELETE_BOARD_FAILURE,
  DELETE_BOARD_MEMBER_REQUEST,
  DELETE_BOARD_MEMBER_FAILURE,
  DELETE_BOARD_MEMBER_SUCCESS,
  UPDATE_WAIT_CARD_REQUEST,
  UPDATE_WAIT_CARD_FAILURE,
  UPDATE_WAIT_CARD_SUCCESS,
  DELETE_WAIT_CARD_FAILURE,
  DELETE_WAIT_CARD_SUCCESS,
  DELETE_WAIT_CARD_REQUEST,
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

function* addBoardSaga(action) {
  try {
    const res = action.payload;
    yield put({ type: ADD_BOARD_SUCCESS, res });
  } catch (error) {
    yield put({ type: ADD_BOARD_FAILURE, error });
  }
}

function* deleteBoardSaga(action) {
  try {
    const res = action.payload;
    yield put({ type: DELETE_BOARD_SUCCESS, res });
  } catch (error) {
    yield put({ type: DELETE_BOARD_FAILURE, error });
  }
}

function* deleteBoardMemberSaga(action) {
  try {
    const boardName = action.payload.boardName;
    const deletedMember = action.payload.tmpDeletedMember;
    // api call -> 백엔드에서 실제로 제거

    yield put({
      type: DELETE_BOARD_MEMBER_SUCCESS,
      res: { boardName, deletedMember },
    });
  } catch (error) {
    yield put({ type: DELETE_BOARD_MEMBER_FAILURE, error });
  }
}

function* updateWaitCardSaga(action){
  try{
    const res = action.payload
    yield put({type : UPDATE_WAIT_CARD_SUCCESS,res})
  }catch(error){
    yield put({type : UPDATE_WAIT_CARD_FAILURE,error});
  }
}

function* deleteWaitCardSaga(action){
  try{
    const res = action.payload;
    yield put({type : DELETE_WAIT_CARD_SUCCESS,res});
  }catch(error){
    yield put({type : DELETE_WAIT_CARD_FAILURE,error});
  }
}
export function* watchBoard() {
  yield takeLatest(LOAD_BOARD_REQUEST, loadBoardSaga);
  yield takeLatest(LOAD_BOARD_LIST_REQUEST, loadBoardListSaga);
  yield takeLatest(ADD_BOARD_REQUEST, addBoardSaga);
  yield takeLatest(DELETE_BOARD_REQUEST, deleteBoardSaga);
  yield takeLatest(DELETE_BOARD_MEMBER_REQUEST, deleteBoardMemberSaga);
  yield takeLatest(UPDATE_WAIT_CARD_REQUEST, updateWaitCardSaga);
  yield takeLatest(DELETE_WAIT_CARD_REQUEST, deleteWaitCardSaga);
}
