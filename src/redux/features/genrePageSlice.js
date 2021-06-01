

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchGenre} from '../../util/ApiFetcher'
import { actions } from "./fetcherApi";

 
export const fetchGenreMovies = createAsyncThunk(
  'genrePage/fetchStatus', 
  async (action, thunkAPI) => {
   try{
    let response = await fetchGenre(action.genre,action.amount,action.year,action.sorted,action.vote)
    console.log(response)
    return response 
   }catch(error){
      throw Error(error)
   }

}
)

export const genrePageSlice = createSlice({
    name: 'genrePage',
    initialState: {
      result: [],
      genre:"",
    },
    reducers:{
      setResults: (state,actions) => {
        state.result = actions.payload
      },
      setGenre: (state,action) => {
        state.genre = action.payload
      }
    
    },
    extraReducers: {
      [fetchGenreMovies.fulfilled]: (state,action) => {
        state.result = action.payload
      },
      [fetchGenreMovies.rejected]: (state,action) => {
        console.log(action.error.message)
      },
    }

  })
  
  
  // Action creators are generated for each case reducer function
  export const { setGenre } = genrePageSlice.actions
  
  export default genrePageSlice.reducer


