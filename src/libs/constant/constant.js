import { createUser, createBoard } from "../util/dummyCreator";

export const CLIENT_URL = "http://localhost:3000";

export const BACK_URL = "http://localhost:4000";

export const userList = (userNum) => {
  return {
    ...createUser(),
  };
};

export const boardList = (boardNum) => {
  return {
    ...createBoard(),
  };
};
