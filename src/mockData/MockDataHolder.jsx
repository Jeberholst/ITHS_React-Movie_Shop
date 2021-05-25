
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
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
  },
}));

// <MockMovieSection screen={'MovieSearch'}/> TODO: Add MovieSearch.jsx and create switch in MockDataHolder

const MockDataHolder = () => {
  const classes = useStyles();
  
  getMockData()

  const screen = useSelector(state => state.movieSection.screen)

    return(
      <React.Fragment>
        <div className={classes.root}>

            <MockMovieSection screen={screen}/>

        </div>
      </React.Fragment>
    );

};

function getMockData(){
  fetchers.fetchPopular();
  fetchers.fetchGenres();
}


export default MockDataHolder;