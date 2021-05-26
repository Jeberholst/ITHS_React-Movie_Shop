
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTopFive } from '../../util/ApiFetcher'

export const fetchTopMovies = createAsyncThunk(
  'mainslider/fetchStatus',
  async (thunkAPI) => {
    try{
      let response = await fetchTopFive()
      return response 
     }catch(error){
        throw Error(error)
     }
  }
)

export const mainSliderSlice = createSlice({
    name: 'mainSlider',
    initialState: {
      translateX: 0,
      slides: [],
    },
    reducers: {
      toggelSlider: (state,direction) => {
        direction.payload === "LEFT" ? state.translateX  = state.translateX + window.innerWidth : state.translateX -= window.innerWidth
      },
      resetSlider: (state) => {
        state.translateX = 0
      },
    },
    extraReducers: {
      [fetchTopMovies.fulfilled]:(state,action) => {
        state.slides = action.payload.slice(0,5)
      },
      [fetchTopMovies.rejected]:(state,action) => {

      },
      [fetchTopMovies.pending]:(state,action) => {

      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { toggelSlider, resetSlider } = mainSliderSlice.actions
  
  export default mainSliderSlice.reducer
