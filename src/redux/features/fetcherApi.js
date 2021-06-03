import { createAction, createReducer } from "@reduxjs/toolkit";

const startFetch = createAction('started fetching');
const fetchSuccess = createAction('fetching completed');
const fetchFailed = createAction('fetching failed');

const actions = { startFetch, fetchSuccess, fetchFailed };

const API_FETCHER_STATUSES = {
  DEFAULT: {
    status: 0,
    message: 'default',
  },
  FETCHING: {
    status: 1,
    message: 'Is fetching api data...',
  },
  SUCCESS: {
    status: 2,
    message: 'Fetch SUCCESS',
  },
  FAILED: {
    status: 3,
    message: 'Fetch FAILED',
  }
}

const initialState = {
    STATUS : API_FETCHER_STATUSES.DEFAULT,
    RESULT: [],
}

const reducer = createReducer(initialState, {
  [startFetch]: (state, action) =>({
      ...state,
      STATUS: API_FETCHER_STATUSES.FETCHING
  }),
  [fetchSuccess]: (state, action) => {
      console.log('PAYLOAD SUCCESS', actions.payload)
      state.STATUS = API_FETCHER_STATUSES.SUCCESS
      state.RESULT = action.payload
  },
  [fetchFailed]: (state, action) =>({
    ...state,
      STATUS: API_FETCHER_STATUSES.FAILED
  }),
  
})



export { actions, reducer, API_FETCHER_STATUSES };