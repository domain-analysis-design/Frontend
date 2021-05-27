import { put, takeLatest} from "redux-saga/effects";
import { createOtherBoard, createOtherUser } from "../libs/util/dummyCreator";
import { LOAD_BOARDS_FAILURE, LOAD_BOARDS_REQUEST, LOAD_BOARDS_SUCCESS, LOAD_USERS_FAILURE, LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS } from "../reducers/totalData";

function* loadBoardsSaga(){
    try{
        const res = createOtherBoard();
        yield put({type : LOAD_BOARDS_SUCCESS,res})
    }catch(error){
        yield put({type : LOAD_BOARDS_FAILURE,error})
    }
}
function* loadUsersSaga(){
    try{
        const res = createOtherUser();
        yield put({type : LOAD_USERS_SUCCESS,res})
    }catch(error){
        yield put({type : LOAD_USERS_FAILURE,error})
    }
}

export function* watchTotalData(){
    yield takeLatest(LOAD_BOARDS_REQUEST,loadBoardsSaga);
    yield takeLatest(LOAD_USERS_REQUEST,loadUsersSaga);
}