

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchGenre} from '../../util/ApiFetcher'


 
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
      ready:false,
    },
    reducers:{
      setGenre: (state,action) => {
        state.genre = action.payload
      },
      setReady: (state,action) => {
        state.ready = action.payload
      }
    
    },
    extraReducers: {
      [fetchGenreMovies.fulfilled]: (state,action) => {
        console.log("adding stuff")
        state.result = action.payload;
        state.ready = true;
      },
      [fetchGenreMovies.rejected]: (state,action) => {
        console.log(action.error.message)
      },
      [fetchGenreMovies.pending]: (state,action) => {
        state.result = []
        state.ready = false;
      }
    }

  })
  
  
  // Action creators are generated for each case reducer function
  export const { setGenre, setReady } = genrePageSlice.actions
  export const movieResults = state => state.genrePage.result 
  
  export default genrePageSlice.reducer


