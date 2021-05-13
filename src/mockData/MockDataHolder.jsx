
import React from 'react';
import { arrayPlotFull, arraySearchPaged} from './mock-data-fetcher'
import MockMovieSingle from './MockMovieSingle'
import MockMoviePaged from './MockMoviePaged'

const MockDataHolder = () => {

    
    return(
      <React.Fragment>
          <h1>Single Item</h1>
  
          {arrayPlotFull.map((item) => (
            <MockMovieSingle item={item}></MockMovieSingle>
          ))}
  
          <h1>Paged search</h1>
          
          {arraySearchPaged.map((item) => (
            <MockMoviePaged item={item}></MockMoviePaged>
          ))}
  
      </React.Fragment>
    );
};

export default MockDataHolder;