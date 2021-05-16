import { all, fork } from "redux-saga/effects";
import { watchBoard } from "./board";
import { watchUser } from "./user";

function* rootSaga() {
  yield all([fork(watchBoard), fork(watchUser)]);
}

export default rootSaga;
