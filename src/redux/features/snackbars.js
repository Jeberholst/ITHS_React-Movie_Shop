import { createAction, createReducer } from "@reduxjs/toolkit";

const showSnackBar = createAction('show snackbar');
const setSeverity = createAction('set snackbar type');
const setText = createAction('set snackbar text');

const actions = { showSnackBar, setSeverity, setText };

export const SEVERITY_TYPE = {
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error',
};

export const SNACK_TEXT = {
    default: 'No info set',
    cartAdded: 'Item added to cart',
    cartRemoved: 'Item removed from cart',
    cartCleared: 'Cart has been cleared',
    cartItemExists: 'Already in cart',
};

const initialState = {
    isOpen : false,
    severity: SEVERITY_TYPE,
    text: SNACK_TEXT
};

const reducer = createReducer(initialState, {
    [showSnackBar] : (state, action) => { 
        state.isOpen = action.payload;
    },
    [setSeverity] : (state, action) => { 

        switch(action.payload){
            case SEVERITY_TYPE.success:
                state.severity = 'success';
                break;
            case SEVERITY_TYPE.warning:
                state.severity = 'warning';
                break;
            case SEVERITY_TYPE.error:
                state.severity = 'removed';
                break;
            default:   
                state.severity = 'info';
                break;    
        };
    },
    [setText] : (state, action) => { 
        state.text = action.payload;
    },
});

export { actions, reducer };