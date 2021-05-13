
import React from 'react';
import { arrayPlotFull, arraySearchPaged} from './mock-data-fetcher'
import MockMovieSingle from './MockMovieSingle'
import MockMoviePaged from './MockMoviePaged'
import { makeStyles } from '@material-ui/core';

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
    
    return(
      <div className={classes.root}>
          <h1>Single Item</h1>
  
          {arrayPlotFull.map((item) => (
            <MockMovieSingle item={item}></MockMovieSingle>
          ))}
  
          <h1>Paged search</h1>
          
          {arraySearchPaged.map((item) => (
            <MockMoviePaged item={item}></MockMoviePaged>
          ))}
  
      </div>
    );
};

export default MockDataHolder;