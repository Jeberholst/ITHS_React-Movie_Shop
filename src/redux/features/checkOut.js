import { createAction, createReducer } from "@reduxjs/toolkit";

const setVisibility = createAction('show');

const actions = { setVisibility };

const initialState = {
    visibility : false,
}

const reducer = createReducer(initialState, {
    [setVisibility] : (state, action) => { 
        const value = true
        console.log(value)
        state.visible = value
    },
}) 


export { actions, reducer };