
import React from 'react';
import { arrayPlotFull, arraySearchPaged } from './mock-data-fetcher'
import MockMovieSingle from './MockMovieSingle'
import MockMoviePaged from './MockMoviePaged'
import { makeStyles } from '@material-ui/core';
import { getTitleFull, getSearchedTitlePaged } from './mock-data-fetcher'

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
            {/* <h1>Single Item</h1>
    
            {arrayPlotFull.map((item) => (
              <MockMovieSingle key={'single-full-' + item.imdbId} item={item}></MockMovieSingle>
            ))} */}
    
            <h1>Paged search</h1>
            
            {arraySearchPaged.map((item) => (
              <MockMoviePaged key={'paged-' + item.imdbId} item={item}></MockMoviePaged>
            ))}
        </div>
      </React.Fragment>
    );
};

function getMockData(){
  getTitleFull();
  getSearchedTitlePaged();
}


export default MockDataHolder;