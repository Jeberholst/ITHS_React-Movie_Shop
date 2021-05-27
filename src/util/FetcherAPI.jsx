
import { LinearProgress, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
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
   
    let fetchedMessage = null;
    let fetchedResult = [];

    if (STATUS.status ===  API_FETCHER_STATUSES.FETCHING.status) {
        console.log('STATUS 1', STATUS.status)
        fetchedMessage = API_FETCHER_STATUSES.FETCHING.message
    } 
    else if ( STATUS.status ===  API_FETCHER_STATUSES.SUCCESS.status) {
        console.log('STATUS 2', STATUS)
        fetchedMessage = API_FETCHER_STATUSES.SUCCESS.message
        fetchedResult = RESULT
        // console.log('Result in FetcherAPI.jsx', RESULT)
    }
    else {
        console.log('STATUS 3', STATUS)
        fetchedMessage = API_FETCHER_STATUSES.FAILED.message
        fetchedResult = [];
    }

    useEffect(() => {
        startFetching(dispatch, props.type)
    }, [dispatch, props.type])


    if(fetchedResult !== null){
        return (
             //RETURN JSX COMPONENT DEPENDING ON WHAT THE type passed is, so a switch here with a type-constant as in startFetching()
             <div className={classes.root}>
                 
                 <div className={classes.containerText}>
                     <div>
                        <h3>{'RESULT'}</h3>
                     </div>
                 </div>
    
                <div className={classes.containerProgress} style={{ display: 'flex'}}>
                     <div style={{marginBottom: 15}}>
                        <p color={'white'}>{fetchedMessage}</p>
                        {
                            fetchedResult.map((item) => (
                                <React.Fragment>
                                    <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', fontSize: 8, marginBottom: 10}}>
                                        <b>{item.id}</b>
                                        <i>{item.overview}</i>
                                        <i>{item.posterPath}</i>
                                    </div>
            
                                </React.Fragment>
                            ))
                        }

                    </div>
                    
                 </div>
      
            </div>
          );

    } else {
        return (
            'null'
          );
    }
   
 }


export default FetcherAPI;

async function startFetching(dispatch, type) {
    
    dispatch(actions.startFetch());
    
    //MOVE TO fetcherFunctions.js, top var
    const API_KEY = "9f9816e8ad3f4241eaf738efa1c54328"

    let apiURL = ""
    let fullApiUrl = ""

    // console.log('type', type)

    //TODO: CREATE CONSTANT FOR type

    switch(type){
        case 'ListPopular':

            //MOVE TO FUNCTION
            apiURL = "https://api.themoviedb.org/3/movie/popular"
            fullApiUrl = `${apiURL}?api_key=${API_KEY}`

            //KEEEP THIS AND only pass dispatch-er
            fetchListPopular(dispatch, fullApiUrl)
            break;

       case 'ListGenres':

           //MOVE TO FUNCTION
            apiURL = "https://api.themoviedb.org/3/genre/movie/list"
            
            //KEEEP THIS AND only pass dispatch-er
            fullApiUrl = `${apiURL}?api_key=${API_KEY}`
            
            fetchListGenres(dispatch, fullApiUrl)

            break;

       case 'Paged':
           
            console.log('type', type)
            break;

        default:
            console.log('No TYPE supplied', 'Error error error supply a [type] to FetcherAPI.jsx')
            break;

    }
  

}


