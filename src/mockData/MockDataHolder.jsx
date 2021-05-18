
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { fetchers } from './mock-data-fetcher'
import MockMovieSection from './MockMovieSection';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'left',
    textAlign: 'left',
    alignContent: 'left',
  },
}));

// <MockMovieSection screen={'MovieSearch'}/> TODO: Add MovieSearch.jsx and create switch in MockDataHolder

const MockDataHolder = () => {
    const classes = useStyles();
    
    getMockData()

    const selectedMovie = useSelector(state => state.movieSection.selectedMovie)

    if(selectedMovie === null){
      return(
        <React.Fragment>
            <div className={classes.root}>

                <MockMovieSection screen={'MovieGrid'}/>

            </div>
          </React.Fragment>
        );
    } else {
      
      return(
        <React.Fragment>
          <div className={classes.root}>

              <MockMovieSection screen={'MovieSingle'}/>
  
          </div>
        </React.Fragment>
      ); 
   
    };
  
  
};

function getMockData(){
  fetchers.fetchPopular();
  fetchers.fetchGenres();
}


export default MockDataHolder;