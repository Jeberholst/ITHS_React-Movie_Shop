import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
      menuOpen: false,
    },
    reducers: {
      toggelMenu: (state) => {
         
        state.menuOpen = !state.menuOpen
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { toggelMenu } = navbarSlice.actions
  
  export default navbarSlice.reducer