import { createAction, handleActions } from "redux-actions";

// inital state

export const initialState = {
    TotalUsersLoading : false,
    TotalBoardsLoading : false,
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

export const GET_USERS_REQUEST = "totalData/GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "totalData/GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "totalData/GET_USERS_FAILURE";


export const GET_BOARDS_REQUEST = "totalData/GET_BOARDS_REQUEST";
export const GET_BOARDS_SUCCESS = "totalData/GET_BOARDS_SUCCESS";
export const GET_BOARDS_FAILURE = "totalData/GET_BOARDS_FAILURE";

export const INVITE_USER_REQUEST = "totalData/INVITE_USER_REQUEST";
export const INVITE_USER_SUCCESS = "totalData/INVITE_USER_SUCCESS";
export const INVITE_USER_FAILURE = "totalData/INVITE_USER_FAILURE";
//action creator

export const initializeBoardsRequestAction = createAction(INITIALIZE_BOARDS);
export const initializeUsersRequestAction = createAction(INITIALIZE_USERS);

export const loadBoardsRequestAction = createAction(LOAD_BOARDS_REQUEST);
export const loadUsersRequestAction = createAction( LOAD_USERS_REQUEST);

export const getUsersRequestAction = createAction(GET_USERS_REQUEST);
export const getBoardsRequestAction = createAction(GET_BOARDS_REQUEST);

export const inviteUserInTotalRequestAction = createAction(INVITE_USER_REQUEST, data=>data);
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
            TotalBoardsLoading:true,
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
            TotalUsersLoading:true,
        }},
    [LOAD_USERS_FAILURE]:(state,action) => ({
        ...state,
    }),

    [GET_USERS_REQUEST]:(state,action) => ({
        ...state,
    }),
    [GET_USERS_SUCCESS]:(state,action) => {
        return{
            ...state,
            TotalUsers:action.TotalUsers,
        }},
    [GET_USERS_FAILURE]:(state,action) => ({
        ...state,
    }),

    [GET_BOARDS_REQUEST]:(state,action) => ({
        ...state,
    }),
    [GET_BOARDS_SUCCESS]:(state,action) => {
        return{
            ...state,
            TotalBoards:action.TotalBoards,
        }},
    [GET_BOARDS_FAILURE]:(state,action) => ({
        ...state,
    }),
    [INVITE_USER_REQUEST]:(state,action) =>({
        ...state,
    }),
    [INVITE_USER_SUCCESS]:(state,action) =>({
        ...state,
        TotalUsers :{
            UserList : 
                state.TotalUsers.UserList.filter((v,i) => i !== action.res)
        }
    }),
    [INVITE_USER_FAILURE]:(state,action) =>({
        ...state,
    })
}, initialState,
);

// export

export default totalData;