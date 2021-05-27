
import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import MoviePopular from '../components/fetcher-components/MoviePopular';
import { actions, API_FETCHER_STATUSES } from './../redux/features/fetcherApi';
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


const FetcherAPI = ({...props}) => {
    
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const STATUS = useSelector(state => state.fetcherApi.STATUS);
    const RESULT = useSelector(state => state.fetcherApi.RESULT);
   
    let fetchedResult = [];

    if (STATUS.status ===  API_FETCHER_STATUSES.FETCHING.status) {
        console.log('STATUS 1', STATUS.status)
        console.log('STATUS MESSAGE: ', STATUS.message)
    } 
    else if ( STATUS.status ===  API_FETCHER_STATUSES.SUCCESS.status) {
        console.log('STATUS 2: ', STATUS.status)
        console.log('STATUS MESSAGE: ', STATUS.message)
        fetchedResult = RESULT
    }
    else {
        console.log('STATUS 3', STATUS.status)
        console.log('STATUS MESSAGE: ', STATUS.message)
        fetchedResult = [];
    }

    useEffect(() => {
        startFetching(dispatch, props.type, props.text)
    }, [dispatch, props.type, props.text])

    let useComponent = null

    switch(props.type){
            case 'ListPopular':

                useComponent = <MoviePopular {...{RESULT: RESULT}}/>
                    
                break;
                
            case 'ListGenres':

                useComponent = null
                
                break;

            case 'Paged':   

                useComponent = null

                break;

            default:

                console.log("Not matching type supplied")
                break;
        }
    
    if(fetchedResult !== null){
        
        return (
             <div className={classes.root}>
                {useComponent}
            </div>
          );

    } else {
        return (
            'null'
          );
    }
   
 }


export default FetcherAPI;

async function startFetching(dispatch, type, text) {
    
    dispatch(actions.startFetch());
    console.log('ASYNC FUNC Start fetch with: ', type, text)
    // console.log('type', type)
    //TOD: CREATE CONSTANT FOR type

    switch(type){
        case 'ListPopular':

            fetchListPopular(dispatch)

            break;

       case 'ListGenres':

            fetchListGenres(dispatch)

            break;

       case 'Search':
           // fetchListSearch(dispatch, text)
            break;

        default:
            console.log('No TYPE supplied', 'Error error error supply a [type] to FetcherAPI.jsx')
            break;

    }
  

}


