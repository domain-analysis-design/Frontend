import {createAction, handleActions} from "redux-actions";

//  initial  state

export const initialState = {
    userPost : null,
}

// action type

export const INITIALIZE_POST = "post/INITIALIZE_POST"

export const LOAD_USER_POST_REQUEST = "post/LOAD_USER_POST_REQUEST"
export const LOAD_USER_POST_SUCCESS = "post/LOAD_USER_POST_SUCCESS"
export const LOAD_USER_POST_FAILURE = "post/LOAD_USER_POST_FAILURE"

// action creator

export const loadUserPostRequestAction = createAction(LOAD_USER_POST_REQUEST)

// reducer

const post = handleActions({
    [LOAD_USER_POST_REQUEST] : (state,action) =>({
        ...state,
    }),
    [LOAD_USER_POST_SUCCESS] : (state,action) => ({
        ...state,
        userPost : action.post
    }),
    [LOAD_USER_POST_FAILURE] : (state,action) => ({
        ...state,
    })
},initialState)

// export

export default post
