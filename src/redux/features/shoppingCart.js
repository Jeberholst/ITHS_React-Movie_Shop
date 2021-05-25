import { createAction, createReducer } from "@reduxjs/toolkit";

const addListMovie = createAction('add list movie item');
const removeCartItem = createAction('remove list movie item');
const clearCart = createAction('clear cart');
const setDisplayCheckout = createAction('set display checkout');

const actions = { addListMovie, removeCartItem, clearCart, setDisplayCheckout };

const initialState = {
    listOfMovies : [],
    listCount : 0,
    displayCheckoutComp: false,
}

const reducer = createReducer(initialState, {
    [addListMovie] : (state, action) => { 
        const value = action.payload
        state.listCount = (state.listOfMovies.length + 1)
        state.listOfMovies.push(value)
    },
    [removeCartItem] : (state, action) => { 
        const list = state.listOfMovies.filter(function(item) {
            return item !== action.payload
        })
        state.listCount = (list.length)
        state.listOfMovies = list
    },
    [clearCart] : (state, action) => { 
        const list = [];
        state.listCount = (0)
        state.listOfMovies = list
    },
    [setDisplayCheckout] : (state, action) => { 
        const bool = action.payload
        state.displayCheckoutComp = bool
    },
}) 


export { actions, reducer };