import { createAction, createReducer } from "@reduxjs/toolkit";

const addMovie = createAction('add movie item');
const addListMovie = createAction('add list movie item');

const actions = { addMovie, addListMovie };

const initialState = {
    listOfMovies : [],
    listCount : 0,
}

const reducer = createReducer(initialState, {
    [addMovie] : (state, action) => (
        {...state, singleMovie: action.payload }
    ),
}) 

export { actions, reducer };