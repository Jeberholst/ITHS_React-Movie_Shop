
import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import MoviePopular from '../components/fetcher-components/MovieGridLoader';
import { API_FETCHER_STATUSES } from './../redux/features/fetcherApi';
import { fetchListGenres, fetchListPopular } from './fetcherFunctions'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'column',
      width: '100%',
      height: '100%',
      marginTop: 10,
      marginBottom: 10,
      color: 'white',
      justifyContent: 'center',
      justifyItems: 'center',
      alignContent: 'center'
    },
    containerText: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    containerProgress: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        marginTop: 5,
    }

}))

export const FETCH_API_TYPE = {
    LIST_POPULAR: "LIST_POPULAR", 
    LIST_GENRE: "LIST_GENRE", 
}

const FetcherAPI = ({...props}) => {
    
    const dispatch = useDispatch();

    const STATUS = useSelector(state => state.fetcherApi.STATUS);
    const RESULT = useSelector(state => state.fetcherApi.RESULT);
   
    // let fetchedMessage = null;
    let fetchedResult = [];

    if (STATUS.status ===  API_FETCHER_STATUSES.FETCHING.status) {
        console.log('STATUS 1', STATUS.status)
        // fetchedMessage = API_FETCHER_STATUSES.FETCHING.message
    } 
    else if ( STATUS.status ===  API_FETCHER_STATUSES.SUCCESS.status) {
        console.log('STATUS 2', STATUS.status)
        // fetchedMessage = API_FETCHER_STATUSES.SUCCESS.message
        fetchedResult = RESULT
        // console.log('Result in FetcherAPI.jsx', RESULT)
    }
    else {
        console.log('STATUS 3', STATUS.status)
        // fetchedMessage = API_FETCHER_STATUSES.FAILED.message
        fetchedResult = [];
    }

    let useComponent = null;
    let useFunction = null;
    

    // console.log('Extras: ', 'ID:' + props.extras.id, 'Search:' + props.extras.search)

    switch(props.type){
        case "LIST_POPULAR":

            useComponent = <MoviePopular {...{RESULT: RESULT}}/>
            useFunction = () => fetchListPopular(dispatch)
            console.log('USING ', 'FETCH list popular')
            break;

        case "LIST_GENRE":
            
            useComponent = <MoviePopular {...{RESULT: RESULT}}/>
            console.log('TYPE:', String(props.extras.id).toUpperCase())
            useFunction = () => fetchListGenres(dispatch, String(props.extras.id).toUpperCase())
            console.log('USING ', 'FETCH list genres')
            break;

       case 'Paged':
           
            break;

        default:
    
            useComponent = null
            useFunction = () => {}
            break;

    }

    console.log('USE THIS FUNCTION: ', useFunction)
    // StartFetching(() => useFunction)

    useEffect(() => {
        StartFetching(useFunction)
    }, [])

    if(fetchedResult !== null){
        return (
                <React.Fragment>
                    {useComponent}
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
    console.log('StartFetching')
    console.log('USEFUNCTION-', useFunction)
    useFunction();
}

