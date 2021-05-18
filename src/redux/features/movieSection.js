import { createAction, createReducer } from "@reduxjs/toolkit";

const setSelectedMovie = createAction('set selected movie');
const resetSelectedMovie = createAction('set selected movie null');

const actions = { setSelectedMovie, resetSelectedMovie };

//TODO: create custom state with null, search or single here later (selectedMovie)

const initialState = {
    selectedMovie : null,
}

const reducer = createReducer(initialState, {
    [setSelectedMovie] : (state, action) => { 

        const movieItem = action.payload
        console.log('Selected movie set to: ', movieItem)
        state.selectedMovie = movieItem

    },
    [resetSelectedMovie] : (state, action) => { 

        console.log('Set selectedMovie null')
        state.selectedMovie = null

    },
}) 


export { actions, reducer };