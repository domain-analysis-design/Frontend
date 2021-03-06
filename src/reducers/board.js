import { createAction, handleActions } from "redux-actions";
import shortid from "shortid";

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
  boardMember: null,
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

export const DELETE_BOARD_REQUEST = "board/DELETE_BOARD_REQUEST";
export const DELETE_BOARD_SUCCESS = "board/DELETE_BOARD_SUCCESS";
export const DELETE_BOARD_FAILURE = "board/DELETE_BOARD_FAILURE";

export const DELETE_BOARD_MEMBER_REQUEST = "board/DELETE_BOARD_MEMBER_REQUEST";
export const DELETE_BOARD_MEMBER_SUCCESS = "board/DELETE_BOARD_MEMBER_SUCCESS";
export const DELETE_BOARD_MEMBER_FAILURE = "board/DELETE_BOARD_MEMBER_FAILURE";

export const UPDATE_WAIT_CARD_REQUEST = "board/UPDATE_WAIT_CARD_REQUEST";
export const UPDATE_WAIT_CARD_SUCCESS = "board/UPDATE_WAIT_CARD_SUCCESS";
export const UPDATE_WAIT_CARD_FAILURE = "board/UPDATE_WAIT_CARD_FAILURE";

export const DELETE_WAIT_CARD_REQUEST = "board/DELETE_WAITE_CARD_REQUEST";
export const DELETE_WAIT_CARD_SUCCESS = "board/DELETE_WAIT_CARD_SUCCESS";
export const DELETE_WAIT_CARD_FAILURE = "board/DELETE_WAIT_CARD_FAILURE";

export const UPDATE_BOARD_REQUEST = "board/UPDATE_BOARD_REQUEST";
export const UPDATE_BOARD_SUCCESS = "board/UPDATE_BOARD_SUCCESS";
export const UPDATE_BOARD_FAILURE = "board/UPDATE_BOARD_FAILURE";

export const MOVE_CARD = "board/MOVE_CARD";

export const UPDATE_LIST = "board/UPDATE_LIST";

export const SEND_CARD = "board/SEND_CARD";

export const CREATE_LIST = "board/CREATE_LIST";

export const CREATE_CARD = "board/CREATE_CARD";

export const CHECK_ITEM = "board/CHECK_ITEM";

export const DELETE_ITEM = "board/DELETE_ITEM";

export const ADD_ITEM = "board/ADD_ITEM";

export const ADD_COMMENT = "board/ADD_COMMENT";

export const INVITE_USER_REQUEST = "board/INVITE_USER_REQUEST";
export const INVITE_USER_SUCCESS = "board/INVITE_USER_SUCCESS";
export const INVITE_USER_FAILURE = "board/INVITE_USER_FAILURE";
export const DENY_CARD = "board/DENY_CARD";

// action creator

export const initializeBoardRequestAction = createAction(INITIALIZE_BOARD);

export const initializeBoardListRequestAction = createAction(
  INITIALIZE_BOARD_LIST,
);

export const loadBoardRequestAction = createAction(
  LOAD_BOARD_REQUEST,
  (data) => data,
);

export const loadBoardListRequestAction = createAction(LOAD_BOARD_LIST_REQUEST);

export const addBoardRequestAction = createAction(
  ADD_BOARD_REQUEST,
  (data) => data, //?????? saga?????? action?????? ???????????????????????? ??????????
);

export const updateWaitCardRequestAction = createAction(
  UPDATE_WAIT_CARD_REQUEST,
);

export const deleteWaitCardRequestAction = createAction(
  DELETE_WAIT_CARD_REQUEST,
);
// ?????? ??????
// board?????? createBoard??? data??? ??????????????? addBoardRequestAction??????
// saga?????? watchBoard??? REQUEST??? CATCH?????? addBoardSaga??????
// addBoardSaga????????? createBoard??? addBoardRequestAction?????? data??? ????????????
// action.payload??? ???????????? ??????
// action.payload??? res??? ???????????? res??? ???????????????
// success?????? (action.res = ??????????????? board)??? ?????????
// concat??? ???????????? ?????? ??????

// delete??? ?????????
export const deleteBoardRequestAction = createAction(
  DELETE_BOARD_REQUEST,
  (data) => data,
);

export const deleteBoardMemberRequestAction = createAction(
  DELETE_BOARD_MEMBER_REQUEST,
  (data) => data,
);

export const updateBoardRequestAction = createAction(
  UPDATE_BOARD_REQUEST,
  (data) => data,
);

export const moveCardRequestAction = createAction(MOVE_CARD, (data) => data);

export const updateList = createAction(UPDATE_LIST, (data) => data);

export const sendCardAction = createAction(SEND_CARD);

export const createListAction = createAction(CREATE_LIST);

export const createCardAction = createAction(CREATE_CARD);

export const checkItemAction = createAction(CHECK_ITEM, (data) => data);

export const deleteItemAction = createAction(DELETE_ITEM);

export const addItemAction = createAction(ADD_ITEM);

export const addCommentAction = createAction(ADD_COMMENT);

export const inviteUserRequestAction = createAction(INVITE_USER_REQUEST);
export const denyCardAction = createAction(DENY_CARD, (data) => data);

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
    [ADD_BOARD_REQUEST]: (state, action) => ({
      ...state,
    }),
    [ADD_BOARD_SUCCESS]: (state, action) => {
      return {
        ...state,
        boardList: {
          ...state.boardList,
          boardList: [...state.boardList.boardList].concat(action.res),
        },
      };
    },
    [ADD_BOARD_FAILURE]: (state, action) => ({
      ...state,
    }),
    [DELETE_BOARD_REQUEST]: (state, action) => ({
      ...state,
    }),
    [DELETE_BOARD_SUCCESS]: (state, action) => {
      return {
        ...state,
        boardList: {
          ...state.boardList,
          boardList: state.boardList.boardList.filter(
            (v, i) => v.boardName !== action.res,
          ),
        },
      };
    },
    [DELETE_BOARD_FAILURE]: (state, action) => ({
      ...state,
    }),
    [DELETE_BOARD_MEMBER_REQUEST]: (state, action) => ({
      ...state,
    }),
    [DELETE_BOARD_MEMBER_SUCCESS]: (state, action) => {
      return {
        ...state,
        boardList: {
          ...state.boardList,
          boardList: state.boardList.boardList.map((v, i) => {
            if (v.boardName === action.res.boardName) {
              return {
                ...v,
                member: [...v.member].filter((v2, i2) => {
                  let flag;
                  action.res.deletedMember.forEach((v3, i3) => {
                    if (i2 === v3) {
                      flag = true;
                    }
                  });
                  if (!flag) {
                    return { ...v2 };
                  }
                }),
              };
            } else {
              return { ...v };
            }
          }),
        },
      };
    },
    [DELETE_BOARD_MEMBER_FAILURE]: (state, action) => ({
      ...state,
    }),
    [UPDATE_WAIT_CARD_REQUEST]: (state, action) => ({
      ...state,
    }),
    [UPDATE_WAIT_CARD_SUCCESS]: (state, action) => {
      console.log(action.res);
      return {
        ...state,
        board: {
          ...state.board,
          lists: [...state.board.lists].map((v, i) => {
            if (i === 0) {
              return {
                ...v,
                cards: v.cards.map((v2, i2) => {
                  if (v2.id === action.res) {
                    return {
                      ...v2,
                      accept: !v2.accept,
                    };
                  }
                  return { ...v2 };
                }),
              };
            }
            return { ...v };
          }),
        },
      };
    },
    [UPDATE_WAIT_CARD_FAILURE]: (state, action) => ({
      ...state,
    }),
    [DELETE_WAIT_CARD_REQUEST]: (state, action) => ({
      ...state,
    }),
    [DELETE_WAIT_CARD_SUCCESS]: (state, action) => {
      return {
        ...state,
        board: {
          ...state.board,
          waitingCard: state.board.waitingCard.filter(
            (v, i) => v.id !== action.res,
          ),
        },
      };
    },
    [DELETE_WAIT_CARD_FAILURE]: (state, action) => ({
      ...state,
    }),
    [UPDATE_BOARD_REQUEST]: (state, action) => ({
      ...state,
    }),
    [UPDATE_BOARD_SUCCESS]: (state, action) => {
      return {
        ...state,
        board: action.res,
      };
    },
    [UPDATE_BOARD_FAILURE]: (state, action) => ({
      ...state,
    }),
    [MOVE_CARD]: (state, action) => {
      console.log(action);
      return {
        ...state,
      };
    },
    [UPDATE_LIST]: (state, action) => {
      return {
        ...state,
        board: {
          ...state.board,
          lists: state.board.lists.map((v, i) => {
            if (i === action.payload.from.fromColumnIndex) {
              return { ...v, cards: action.payload.from.fromCards };
            }
            if (i === action.payload.to.toColumnIndex) {
              return { ...v, cards: action.payload.to.toCards };
            }
            return { ...v };
          }),
        },
      };
    },
    [SEND_CARD]: (state, action) => ({
      ...state,
      board: {
        ...state.board,
        lists: state.board.lists.map((v, i) => {
          if (i === 1) {
            return {
              ...v,
              cards: [],
            };
          }
          return { ...v };
        }),
      },
    }),
    [CREATE_LIST]: (state, action) => ({
      ...state,
      board: {
        ...state.board,
        lists: [...state.board.lists, action.payload],
      },
    }),
    [CREATE_CARD]: (state, action) => ({
      ...state,
      board: {
        ...state.board,
        lists: state.board.lists.map((v, i) => {
          if (i === action.payload.columnIndex) {
            return {
              ...v,
              cards: v.cards.concat(action.payload.card),
            };
          }
          return { ...v };
        }),
      },
    }),
    [CHECK_ITEM]: (state, action) => {
      return {
        ...state,
        board: {
          ...state.board,
          lists: state.board.lists.map((v, i) => {
            if (i === action.payload.columnIndex) {
              return {
                ...v,
                cards: v.cards.map((v2, i2) => {
                  if (i2 === action.payload.cardIndex) {
                    return {
                      ...v2,
                      items: v2.items.map((v3, i3) => {
                        if (v3.id === action.payload.id) {
                          return { ...v3, checked: !v3.checked };
                        }
                        return { ...v3 };
                      }),
                    };
                  }
                  return { ...v2 };
                }),
              };
            }
            return { ...v };
          }),
        },
      };
    },
    [DELETE_ITEM]: (state, action) => ({
      ...state,
      board: {
        ...state.board,
        lists: state.board.lists.map((v, i) => {
          if (i === action.payload.columnIndex) {
            return {
              ...v,
              cards: v.cards.map((v2, i2) => {
                if (i2 === action.payload.cardIndex) {
                  return {
                    ...v2,
                    items: v2.items.filter((v3, i3) => {
                      if (v3.id !== action.payload.id) {
                        return { ...v3 };
                      }
                    }),
                  };
                }
                return { ...v2 };
              }),
            };
          }
          return { ...v };
        }),
      },
    }),
    [ADD_ITEM]: (state, action) => ({
      ...state,
      board: {
        ...state.board,
        lists: state.board.lists.map((v, i) => {
          if (i === action.payload.columnIndex) {
            return {
              ...v,
              cards: v.cards.map((v2, i2) => {
                if (i2 === action.payload.cardIndex) {
                  return {
                    ...v2,
                    items: v2.items.concat({
                      id: shortid.generate(),
                      desc: action.payload.itemTitle,
                      checked: false,
                    }),
                  };
                }
                return { ...v2 };
              }),
            };
          }
          return { ...v };
        }),
      },
    }),
    [ADD_COMMENT]: (state, action) => ({
      ...state,
      board: {
        ...state.board,
        lists: state.board.lists.map((v, i) => {
          if (i === action.payload.columnIndex) {
            return {
              ...v,
              cards: v.cards.map((v2, i2) => {
                if (i2 === action.payload.cardIndex) {
                  return {
                    ...v2,
                    comments: v2.comments.concat({
                      id: shortid.generate(),
                      desc: action.payload.commentTitle,
                    }),
                  };
                }
                return { ...v2 };
              }),
            };
          }
          return { ...v };
        }),
      },
    }),
    [INVITE_USER_REQUEST] : (state,action) =>({
        ...state,
    }),
    [INVITE_USER_SUCCESS] : (state,action) =>{
      return {
        ...state,
        board : {
          ...state.board,
          member : state.board.member.concat({memberID : action.res})
        }
      };
    },
    [INVITE_USER_FAILURE] : (state,action) =>({
      ...state,
    }),
    [DENY_CARD]: (state, action) => ({
      ...state,
      board: {
        ...state.board,
        lists: state.board.lists.map((v, i) => {
          if (i === 0) {
            return {
              ...v,
              cards: v.cards.filter((v2, i2) => {
                if (v2.id !== action.payload) {
                  return { ...v2 };
                }
              }),
            };
          }
          return { ...v };
        }),
      },
    }),
  },

  initialState,
);

// export

export default board;
