import { createAction, createReducer } from "@reduxjs/toolkit";

const setScreen = createAction('set screen');
const setSelectedMovie = createAction('set selected movie');
const resetSelectedMovie = createAction('set selected movie null');
const setMovieList = createAction('set movie list')
const resetMovieList = createAction('reset movie list')

const actions = { setScreen, setSelectedMovie, resetSelectedMovie, setMovieList, resetMovieList };

export const MOVIE_SECTION_SCREENS = {
    SLIDER_MOVIES: 'slider_movies',
    GRID_MOVIES: 'grid_movies',
    LIST_SEARCHES: 'list_searches',
    LIST_GENRES: 'list_genres',
    SINGLE_MOVIE: 'single_movie',
    SINGLE_MOVIE_COMMENTS: 'single_movie_comments',
    QUICK_ADD: 'grid_movies',
}

const initialState = {
    screen: MOVIE_SECTION_SCREENS.SLIDER_MOVIES,
    selectedMovie : null,
    movieList : null,
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
    [resetMovieList] : (state, action) => { 
        state.screen = null
    },
    [setMovieList] : (state, action) => { 
        const value = action.payload
        state.movieList = value
    },
}) 


export { actions, reducer };