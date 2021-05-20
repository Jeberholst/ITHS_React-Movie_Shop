import { createSlice } from "@reduxjs/toolkit";

export const mainSliderSlice = createSlice({
    name: 'mainSlider',
    initialState: {
      translateX: 0,
    },
    reducers: {
      toggelSlider: (state,direction) => {
        direction.payload === "LEFT" ? state.translateX  = state.translateX + window.innerWidth : state.translateX -= window.innerWidth
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { toggelSlider } = mainSliderSlice.actions
  
  export default mainSliderSlice.reducer