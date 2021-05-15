import {put,delay, takeLatest} from "redux-saga/effects";
import { createUser } from "../libs/util/dummyCreator";
import { LOAD_USER_POST_FAILURE, LOAD_USER_POST_REQUEST, LOAD_USER_POST_SUCCESS } from "../reducers/post";

function* loadUserPostSaga(){
    try{
        yield delay(100)
        const res = createUser()
        yield put({type:LOAD_USER_POST_SUCCESS, post : res})
    }catch(error){
        yield put({type:LOAD_USER_POST_FAILURE, error})
    }
}

export function* watchPost(){
    yield takeLatest(LOAD_USER_POST_REQUEST,loadUserPostSaga)
}