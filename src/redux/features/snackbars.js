import { createAction, createReducer } from "@reduxjs/toolkit";

const showSnackBar = createAction('show snackbar');
const setSnackBarType = createAction('set snackbar type');

const actions = { showSnackBar, setSnackBarType };

export const SEVERITY_TYPE = {
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error',
};

const initialState = {
    isOpen : false,
    snackBarType: SEVERITY_TYPE,
};

const reducer = createReducer(initialState, {
    [showSnackBar] : (state, action) => { 
        state.isOpen = action.payload;
    },
    [setSnackBarType] : (state, action) => { 

        switch(action.payload){
            case SEVERITY_TYPE.success:
                state.snackBarType = 'success';
                break;
            case SEVERITY_TYPE.warning:
                state.snackBarType = 'warning';
                break;
            case SEVERITY_TYPE.error:
                state.snackBarType = 'removed';
                break;
            default:   
                state.snackBarType = 'info';
                break;    
        };
    }
});

export { actions, reducer };