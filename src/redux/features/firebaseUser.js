import { createAction, createReducer } from "@reduxjs/toolkit";

const userSignedIn = createAction('set user signin');
const noUserSignedIn = createAction('set no user');

const actions = { userSignedIn, noUserSignedIn };

const initialState = {
    user : null,
}

const reducer = createReducer(initialState, {
    [userSignedIn] : (state, action) => { 
        const value = action.payload
        state.user = JSON.stringify(value)
    },
    [noUserSignedIn] : (state, action) => { 
        state.user = null
    },
}) 


export { actions, reducer };