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

export const ADD_BOARD_REQUEST = "board/ADD_BOARD_REQUEST";
export const ADD_BOARD_SUCCESS = "board/ADD_BOARD_SUCCESS";
export const ADD_BOARD_FAILURE = "board/ADD_BOARD_FAILURE";

export const DELETE_BOARD_REQEUST = "board/DELETE_BOARD_REQEUST";
export const DELETE_BOARD_SUCCESS = "board/DELETE_BOARD_SUCCESS";
export const DELETE_BOARD_FAILURE = "board/DELETE_BOARD_FAILURE";

// action creator

export const initializeBoardRequestAction = createAction(INITIALIZE_BOARD);

export const initializeBoardListRequestAction = createAction(
  INITIALIZE_BOARD_LIST,
);

export const loadBoardRequestAction = createAction(LOAD_BOARD_REQUEST);

export const loadBoardListRequestAction = createAction(LOAD_BOARD_LIST_REQUEST);

export const addBoardRequestAction = createAction(
  ADD_BOARD_REQUEST,
  (data) => data,
);

export const deleteBoardRequestAction = createAction(
  DELETE_BOARD_REQEUST,
  (data) => data,
);
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
    [ADD_BOARD_REQUEST]: (state, action) => {
      return {
        ...state,
        boardList: {
          ...state.boardList,
          boardList: [...state.boardList.boardList].concat(action.payload),
        },
      };
    },
    [ADD_BOARD_SUCCESS]: (state, action) => ({
      ...state,
    }),
    [ADD_BOARD_FAILURE]: (state, action) => ({
      ...state,
    }),
    [DELETE_BOARD_REQEUST]: (state, action) => ({
      ...state,
      boardList: {
        ...state.boardList,
        boardList: state.boardList.boardList.filter(
          (v, i) => v.boardName !== action.payload,
        ),
      },
    }),
    [DELETE_BOARD_SUCCESS]: (state, action) => ({
      ...state,
    }),
    [DELETE_BOARD_FAILURE]: (state, action) => ({
      ...state,
    }),
  },
  initialState,
);

// export

export default board;
