import { createSlice } from "@reduxjs/toolkit";

export const filterBarSlice = createSlice({
    name: 'filterBar',
    initialState: {
      year: 2021,
      sortBy:"popularity.desc",
      voteAvg:7,
    },
    reducers:{
      setYear: (state,action) => {
        state.year = action.payload
      },
      setSort: (state,action) => {
        state.sortBy = action.payload
      },
      setVoteAvg: ( state, action) => {
        state.voteAvg = action.payload
      },
      resetFilter: (state,action) => {
        state.year = 2021
        state.sortBy = "popularity.desc"
        state.voteAvg = 7
      },
    
    }

  })
  
  // Action creators are generated for each case reducer function
  export const { setYear, setSort, setVoteAvg, resetFilter } = filterBarSlice.actions
  
  
  export default filterBarSlice.reducer


