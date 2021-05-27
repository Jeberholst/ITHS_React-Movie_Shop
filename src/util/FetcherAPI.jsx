
import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import MovieGridLoader from '../components/fetcher-components/MovieGridLoader';
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
   
    let fetchedResult = [];

    if (STATUS.status ===  API_FETCHER_STATUSES.FETCHING.status) {
        console.log('STATUS 1', STATUS.status)
    } 
    else if ( STATUS.status ===  API_FETCHER_STATUSES.SUCCESS.status) {
        console.log('STATUS 2', STATUS.status)
        fetchedResult = RESULT
    }
    else {
        console.log('STATUS 3', STATUS.status)
        fetchedResult = [];
    }

    let useComponent = null;
    let useFunction = null;
    
    switch(props.type){
        case "LIST_POPULAR":

            useComponent = <MovieGridLoader {...{RESULT: RESULT}}/>
            useFunction = () => fetchListPopular(dispatch)
            break;

        case "LIST_GENRE":
        
            useComponent = <MovieGridLoader {...{RESULT: RESULT}}/>
            // console.log('TYPE:', String(props.extras.id).toUpperCase())
            useFunction = () => fetchListGenres(dispatch, String(props.extras.id).toUpperCase())
            break;

       case 'Paged':
           
            break;

        default:
    
            useComponent = null
            useFunction = () => {}
            break;

    }

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

