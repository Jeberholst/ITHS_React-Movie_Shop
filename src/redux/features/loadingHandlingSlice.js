import { createSlice } from '@reduxjs/toolkit'

export const loadingHandlingSlice = createSlice({
  name: 'loadingHandling',
  initialState: {
    loadingState: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.loadingState = action.payload
    }
  }
})
  
// Action creators are generated for each case reducer function
export const { setLoading } = loadingHandlingSlice.actions

export default loadingHandlingSlice.reducer