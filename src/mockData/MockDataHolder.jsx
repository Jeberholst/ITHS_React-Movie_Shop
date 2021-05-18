
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { fetchers } from './mock-data-fetcher'
import MockMovieSection from './MockMovieSection';

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


const MockDataHolder = () => {
    const classes = useStyles();
    
    getMockData()
    
    return(
      <React.Fragment>
        <div className={classes.root}>

            {/* <MockMovieSection screen={'MovieGrid'}/> */}
            {/* <MockMovieSection screen={'MovieSearch'}/> */}
            <MockMovieSection screen={'MovieSingle'}/>

        </div>
      </React.Fragment>
    );
};

function getMockData(){
  fetchers.fetchPopular();
  fetchers.fetchGenres();
}


export default MockDataHolder;