import { createAction, createReducer } from "@reduxjs/toolkit";

const setScreen = createAction('set screen');
const setSelectedMovie = createAction('set selected movie');
const resetSelectedMovie = createAction('set selected movie null');

const actions = { setScreen, setSelectedMovie, resetSelectedMovie };

export const MovieSectionScreens = {
    GRID_MOVIES: 'grid_movies',
    LIST_SEARCHES: 'list_searches',
    SINGLE_MOVIE: 'single_movie',
    SINGLE_MOVIE_COMMENTS: 'single_movie_comments',
}

const initialState = {
    screen: MovieSectionScreens.GRID_MOVIES,
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
    [setScreen] : (state, action) => { 
        const value = action.payload
        console.log('Should set to screen: ', value)
        state.screen = value
    },
}) 


export { actions, reducer };