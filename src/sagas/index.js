import { all, fork } from "redux-saga/effects";
import { watchBoard } from "./board";
import { watchUser } from "./user";
import { watchTotalData } from "./totalData";

function* rootSaga() {
  yield all([fork(watchBoard), fork(watchUser),fork(watchTotalData)]);
}

export default rootSaga;
