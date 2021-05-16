import { createAction, handleActions } from "redux-actions";

// initial state

export const initialState = {
  user: null,
  userLoading: false,
  userDone: false,
  userError: null,
};

// action type

export const LOAD_USER_REQUEST = "user/LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "user/LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "user/LOAD_USER_FAILURE";

// action creator

export const loadUserRequestAction = createAction(LOAD_USER_REQUEST);

// reducer

const user = handleActions(
  {
    [LOAD_USER_REQUEST]: (state, action) => ({
      ...state,
      userLoading: true,
      userDone: false,
      userError: null,
    }),
    [LOAD_USER_SUCCESS]: (state, action) => ({
      ...state,
      userLoading: false,
      userDone: true,
      userError: null,
      user: action.user,
    }),
    [LOAD_USER_FAILURE]: (state, action) => ({
      ...state,
      userLoading: false,
      userDone: false,
      userError: "error",
    }),
  },
  initialState,
);

export default user;
