import { createAction, handleActions } from "redux-actions";

// initial state

export const initialState = {
  user: null,
  userLoading: false,
  userDone: false,
  userError: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,
  registerLoading: false,
  registerDone: false,
  registerError: null,
};

// action type

export const LOAD_USER_REQUEST = "user/LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "user/LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "user/LOAD_USER_FAILURE";

export const LOGIN_REQUEST = "user/LOGIN_REQUEST";
export const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "user/LOGIN_FAILURE";

export const REGISTER_REQUEST = "user/REGISTER_REQUEST";
export const REGISTER_SUCCESS = "user/REGISTER_SUCCESS";
export const REGISTER_FAILURE = "user/REGISTER_FAILURE";

// action creator

export const loadUserRequestAction = createAction(LOAD_USER_REQUEST);

export const loginRequestAction = createAction(LOGIN_REQUEST);

export const registerRequestAction = createAction(REGISTER_REQUEST);

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
    [LOGIN_REQUEST]: (state, action) => ({
      ...state,
      loginLoading: true,
      loginDone: false,
      loginError: null,
    }),
    [LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      loginLoading: false,
      loginDone: true,
      loginError: null,
      user: action.user,
    }),
    [LOGIN_FAILURE]: (state, action) => ({
      ...state,
      loginLoading: false,
      loginDone: false,
      loginError: "error",
    }),
    [REGISTER_REQUEST]: (state, action) => ({
      ...state,
      registerLoading: true,
      registerDone: false,
      registerError: null,
    }),
    [REGISTER_SUCCESS]: (state, action) => ({
      ...state,
      registerLoading: false,
      registerDone: true,
      registerError: null,
      //user: action.user,
    }),
    [REGISTER_FAILURE]: (state, action) => ({
      ...state,
      registerLoading: false,
      registerDone: false,
      registerError: "error",
    }),
  },
  initialState,
);

export default user;
