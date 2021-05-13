import { createAction, createReducer } from "@reduxjs/toolkit";

const addListMovie = createAction('add list movie item');
const removeCartItem = createAction('remove list movie item');
const clearCart = createAction('clear cart');

const actions = { addListMovie, removeCartItem, clearCart };

const initialState = {
    listOfMovies : [],
    listCount : 0,
}

const reducer = createReducer(initialState, {
    [addListMovie] : (state, action) => { 
        const value = action.payload
        const jsonVal = JSON.parse(action.payload)

        if(state.listOfMovies.length === 0){

            state.listCount = (state.listOfMovies.length + 1)
            state.listOfMovies.push(value)
        
        } else {

            const checkAdded = state.listOfMovies.some(x => JSON.parse(x).imdbId === jsonVal.imdbId)

            if(checkAdded){
                console.log('Movie already added to CART...')
            } else {
                console.log('Adding to CART ' + action.payload)
                state.listCount = (state.listOfMovies.length + 1)
                state.listOfMovies.push(value)
            }

        }

    },
    [removeCartItem] : (state, action) => { 
        console.log('Remove this object... ' + action.payload)
        const list = state.listOfMovies.filter(function(item) {
            return item !== action.payload
        })
        state.listCount = (list.length)
        state.listOfMovies = list
    },
    [clearCart] : (state, action) => { 
        console.log('Clearing cart...')
        const list = [];
        state.listCount = (0)
        state.listOfMovies = list
    },
}) 

export { actions, reducer };