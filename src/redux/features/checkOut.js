import { createAction, createReducer } from "@reduxjs/toolkit";

const setVisibility = createAction('set vis');

const actions = { setVisibility };

const initialState = {
    visibility : false,
}

const reducer = createReducer(initialState, {
    [setVisibility] : (state, action) => ({ 
        
        ...state,
            visibility: !state.visibility
    }),
}) 


export { actions, reducer };