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
  UPDATE_BOARD_REQUEST,
  UPDATE_BOARD_FAILURE,
  UPDATE_BOARD_SUCCESS,
  INVITE_USER_REQUEST,
  INVITE_USER_FAILURE,
  INVITE_USER_SUCCESS,
} from "../reducers/board";

function* loadBoardSaga(action) {
  //loadBoardRequestAction : localStorage에 있는 currentBoard 갖고오기
  try {
    const res = action.payload;
    yield put({ type: LOAD_BOARD_SUCCESS, board : res });
  } catch (error) {
    yield put({ type: LOAD_BOARD_FAILURE, error });
  }
}

function* loadBoardListSaga(action) {
  //loadBoardListRequestAction : 사용자 board 정보 갖고오기
  try {
    yield delay(100);

    const res = createUser();
    yield put({ type: LOAD_BOARD_LIST_SUCCESS, boardList: res });
  } catch (error) {
    yield put({ type: LOAD_BOARD_LIST_FAILURE, error });
  }
}

function* addBoardSaga(action) {
        //addBoardRequestAction : board 생성
  try {
    const res = action.payload;
    yield put({ type: ADD_BOARD_SUCCESS, res });
  } catch (error) {
    yield put({ type: ADD_BOARD_FAILURE, error });
  }
}

function* deleteBoardSaga(action) {
  //deleteBoardSaga 보드삭제
  try {
    const res = action.payload;
    yield put({ type: DELETE_BOARD_SUCCESS, res });
  } catch (error) {
    yield put({ type: DELETE_BOARD_FAILURE, error });
  }
}

function* deleteBoardMemberSaga(action) {
  //deleteBoardMemberRequestAction : 팀원 추방
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
  //waitcard 상태 수정하기 accept하기
  try{
    const res = action.payload
    yield put({type : UPDATE_WAIT_CARD_SUCCESS,res})
  }catch(error){
    yield put({type : UPDATE_WAIT_CARD_FAILURE,error});
  }
}

function* deleteWaitCardSaga(action){
  //waitcard 상태 수정하기
  try{
    const res = action.payload;
    yield put({type : DELETE_WAIT_CARD_SUCCESS,res});
  }catch(error){
    yield put({type : DELETE_WAIT_CARD_FAILURE,error});
  }
}

function* updateBoardRequestSaga(action){
  // board 정보 저장하기
  try{
    const res = action.payload;
    console.log(res);
    yield put({type : UPDATE_BOARD_SUCCESS,res})
  }catch(error){
    yield put({type : UPDATE_BOARD_FAILURE,error});
  }
}

function* inviteUserSaga(action){
  try{
    console.log("A")
    console.log(action.payload);
    const res = action.payload;
    yield put({type : INVITE_USER_SUCCESS,res});
  }catch(error){
    yield put({type : INVITE_USER_FAILURE,error});
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
  yield takeLatest(UPDATE_BOARD_REQUEST, updateBoardRequestSaga);
  yield takeLatest(INVITE_USER_REQUEST,  inviteUserSaga);
}
