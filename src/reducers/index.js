import { combineReducers } from "redux";
import board from "./board";
import user from "./user";
import totalData from "./totalData";

const rootReducer = combineReducers({ board, user,totalData });

export default rootReducer;
