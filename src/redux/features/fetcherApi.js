import { createAction, createReducer } from "@reduxjs/toolkit";

const startFetch = createAction('started fetching');
const fetchSuccess = createAction('fetching completed');
const fetchFailed = createAction('fetching failed');
const pushPartFetch = createAction('part fetch completed');
const pushPartsCompleted = createAction('all parts fetch completed');
const resetState = createAction('resetState');

const actions = { startFetch, fetchSuccess, fetchFailed, pushPartFetch, pushPartsCompleted, resetState };

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
    PART_RES: [],
}

const reducer = createReducer(initialState, {
  [startFetch]: (state, action) =>({
      ...state,
      STATUS: API_FETCHER_STATUSES.FETCHING
  }),
  [fetchSuccess]: (state, action) => {
      state.STATUS = API_FETCHER_STATUSES.SUCCESS
      state.RESULT = action.payload
  },
  [pushPartFetch]: (state, action) => {
      state.PART_RES.push(action.payload)
  },
  [pushPartsCompleted]: (state, action) => ({
    ...state,
      RESULT : [...state.PART_RES],
      STATUS : API_FETCHER_STATUSES.SUCCESS
  }),
  [fetchFailed]: (state, action) =>({
    ...state,
      STATUS: API_FETCHER_STATUSES.FAILED
  }),
  [resetState]: (state, action) => {
    console.log(action.payload)
    state.STATUS = API_FETCHER_STATUSES.DEFAULT
    state.PART_RES = []
    state.RESULT = []
  },
  
})

export { actions, reducer, API_FETCHER_STATUSES };