import { createAction, handleActions } from "redux-actions";

//  initial  state

export const initialState = {
  board: null,
  boardLoading: false,
  boardDone: false,
  boardError: null,
  boardList: null,
  boardListLoading: false,
  boardListDone: false,
  boardListError: null,
};

// action type

export const INITIALIZE_BOARD = "board/INITIALIZE_BOARD";
export const INITIALIZE_BOARD_LIST = "board/INITIALIZE_BOARD_LIST";

export const LOAD_BOARD_REQUEST = "board/LOAD_BOARD_REQUEST";
export const LOAD_BOARD_SUCCESS = "board/LOAD_BOARD_SUCCESS";
export const LOAD_BOARD_FAILURE = "board/LOAD_BOARD_FAILURE";

export const LOAD_BOARD_LIST_REQUEST = "board/LOAD_BOARD_LIST_REQUEST";
export const LOAD_BOARD_LIST_SUCCESS = "board/LOAD_BOARD_LIST_SUCCESS";
export const LOAD_BOARD_LIST_FAILURE = "board/LOAD_BOARD_LIST_FAILURE";

// action creator

export const initializeBoardRequestAction = createAction(INITIALIZE_BOARD);

export const initializeBoardListRequestAction = createAction(
  INITIALIZE_BOARD_LIST,
);

export const loadBoardRequestAction = createAction(LOAD_BOARD_REQUEST);

export const loadBoardListRequestAction = createAction(LOAD_BOARD_LIST_REQUEST);

// reducer

const board = handleActions(
  {
    [INITIALIZE_BOARD]: (state, action) => ({ ...state, board: null }),
    [INITIALIZE_BOARD_LIST]: (state, action) => ({ ...state, boardList: null }),
    [LOAD_BOARD_REQUEST]: (state, action) => ({
      ...state,
      boardLoading: true,
      boardDone: false,
      boardError: null,
    }),
    [LOAD_BOARD_SUCCESS]: (state, action) => ({
      ...state,
      boardLoading: false,
      boardDone: true,
      boardError: null,
      board: action.board,
    }),
    [LOAD_BOARD_FAILURE]: (state, action) => ({
      ...state,
      boardLoading: false,
      boardDone: false,
      boardError: "error",
    }),
    [LOAD_BOARD_LIST_REQUEST]: (state, action) => ({
      ...state,
      boardListLoading: true,
      boardListDone: false,
      boardListError: null,
    }),
    [LOAD_BOARD_LIST_SUCCESS]: (state, action) => ({
      ...state,
      boardListLoading: false,
      boardListDone: true,
      boardListError: null,
      boardList: action.boardList,
    }),
    [LOAD_BOARD_LIST_FAILURE]: (state, action) => ({
      ...state,
      boardListLoading: false,
      boardListDone: false,
      boardListError: "error",
    }),
  },
  initialState,
);

// export

export default board;
