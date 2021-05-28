import { createAction, handleActions } from "redux-actions";

// inital state

export const initialState = {
    TotalUsers : null,
    TotalBoards : null,
};

// action type
export const INITIALIZE_BOARDS = "totalData/INITIALIZE_BOARDS";
export const INITIALIZE_USERS = "totalData/INITIALIZE_USERS";

export const LOAD_BOARDS_REQUEST = "totalData/LOAD_BOARDS_REQUEST";
export const LOAD_BOARDS_SUCCESS = "totalData/LOAD_BOARDS_SUCCESS";
export const LOAD_BOARDS_FAILURE = "totalData/LOAD_BOARDS_FAILURE";


export const LOAD_USERS_REQUEST = "totalData/LOAD_USERS_REQUEST";
export const LOAD_USERS_SUCCESS = "totalData/LOAD_USERS_SUCCESS";
export const LOAD_USERS_FAILURE = "totalData/LOAD_USERS_FAILURE";

//action creator

export const initializeBoardsRequestAction = createAction(INITIALIZE_BOARDS);
export const initializeUsersRequestAction = createAction(INITIALIZE_USERS);

export const loadBoardsRequestAction = createAction(LOAD_BOARDS_REQUEST);
export const loadUsersRequestAction = createAction( LOAD_USERS_REQUEST);

//reducer

const totalData = handleActions(
    {
    [INITIALIZE_BOARDS] : (state,action) => ({...state,boards:null}),
    [INITIALIZE_USERS] : (state,action) => ({...state,users : null}),
    [LOAD_BOARDS_REQUEST]:(state,action) => ({
        ...state,
    }),
    [LOAD_BOARDS_SUCCESS]:(state,action) => {
        return{
            ...state,
            TotalBoards:action.res,
        }},
    [LOAD_BOARDS_FAILURE]:(state,action) => ({
        ...state,
    }),
    [LOAD_USERS_REQUEST]:(state,action) => ({
        ...state,
    }),
    [LOAD_USERS_SUCCESS]:(state,action) => {
        return{
            ...state,
            TotalUsers:action.res,
        }},
    [LOAD_USERS_FAILURE]:(state,action) => ({
        ...state,
    }),
}, initialState,
);

// export

export default totalData;