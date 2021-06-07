import { createAction, createReducer } from "@reduxjs/toolkit";

const displaySnackBar = createAction('display snackbar');
const hideSnackBar = createAction('hide snackbar');

const actions = { displaySnackBar, hideSnackBar };

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
    loggedOut: 'Logged out'
};

const initialState = {
    isOpen : false,
    severity: SEVERITY_TYPE.default,
    text: SNACK_TEXT.default
};

const reducer = createReducer(initialState, {
    [displaySnackBar] : (state, action) => ({
         ...state,

            isOpen: action.payload.isOpen,
            severity: action.payload.severity,
            text: action.payload.text,
    }),
    [hideSnackBar] : (state, action) => {
        state.isOpen = action.payload;
    },

});

const cartAddSuccess = {
    isOpen: true, 
    severity: SEVERITY_TYPE.success, 
    text: SNACK_TEXT.cartAdded
}
const cartAddFailed = {
    isOpen: true, 
    severity: SEVERITY_TYPE.warning, 
    text: SNACK_TEXT.cartItemExists
}

const cartRemovedSuccess = {
    isOpen: true, 
    severity: SEVERITY_TYPE.info, 
    text: SNACK_TEXT.cartRemoved
}

const cartCleared = {
    isOpen: true, 
    severity: SEVERITY_TYPE.error, 
    text: SNACK_TEXT.cartCleared
}

const loggedOutSuccess = {
    isOpen: true,
    severity: SEVERITY_TYPE.success,
    text:SNACK_TEXT.loggedOut,
}


export const cartNotifications = { cartAddSuccess, cartAddFailed, cartRemovedSuccess, cartCleared, loggedOutSuccess }
export { actions, reducer };