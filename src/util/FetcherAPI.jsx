import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { API_FETCHER_STATUSES } from './../redux/features/fetcherApi';
import { fetchListGenres, fetchListPopular } from './fetcherFunctions'
import { actions, MOVIE_SECTION_SCREENS } from './../redux/features/movieSection';
import MovieSection from '../components/fetcher-components/MovieSection';

//MORE CASES
export const FETCH_API_TYPE = {
    LIST_POPULAR: "LIST_POPULAR", 
    LIST_GENRE: "LIST_GENRE", 
}

const FetcherAPI = ({...props}) => {
    
    const dispatch = useDispatch();

    const STATUS = useSelector(state => state.fetcherApi.STATUS);
    const RESULT = useSelector(state => state.fetcherApi.RESULT);
   
    let fetchedResult = [];

    if (STATUS.status ===  API_FETCHER_STATUSES.FETCHING.status) {
        // console.log('STATUS 1', STATUS.status)
    } 
    else if ( STATUS.status ===  API_FETCHER_STATUSES.SUCCESS.status) {
        // console.log('STATUS 2', STATUS.status)
        fetchedResult = RESULT
    }
    else {
        // console.log('STATUS 3', STATUS.status)
        fetchedResult = [];
    }

    // let useComponent = null;
    let useScreen = null;
    let useFunction = null;
    
    switch(props.type){
        case "LIST_POPULAR":

            useScreen = MOVIE_SECTION_SCREENS.GRID_MOVIES
            useFunction = () => fetchListPopular(dispatch)
            break;

        case "LIST_GENRE":
        
            useScreen = MOVIE_SECTION_SCREENS.GRID_MOVIES
            // console.log('TYPE:', String(props.extras.id).toUpperCase())
            useFunction = () => fetchListGenres(dispatch, String(props.extras.id).toUpperCase())
            break;

        default:
    
            useScreen = MOVIE_SECTION_SCREENS.QUICK_ADD
            useFunction = () => {}

            break;

    }

    useEffect(() => {
        StartFetching(useFunction)
    }, [])

    if( fetchedResult !== null ){

        dispatch(actions.setScreen(useScreen))

        return (
            <React.Fragment>
                <MovieSection {...{RESULT: RESULT}}/>
            </React.Fragment>
        );

    } else {

        return (
            <React.Fragment>
                {'null'}
            </React.Fragment>
        );

    }
   
 }

export default FetcherAPI;

const StartFetching = async (useFunction) => {
    useFunction();
}

