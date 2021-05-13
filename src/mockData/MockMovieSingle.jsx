import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'left',
    textAlign: 'left',
    alignContent: 'left',
    background: '#1f1f1f',
  },
  text: {
    margin: 15,
    wordBreak: 'break-word'
  }
}));

const MockMovieSingle = ({item}) => {
    const classes = useStyles();

    return(
      <React.Fragment>
          <div className={classes.root}>
            <div className={classes.text}>
              {item.title}	
              {item.year}	
              {item.rated}
              {item.released}	
              {item.runtime}	
              {item.genre}	
              {item.director}	
              {item.writer}	
              {item.actors}	
              {item.plot}	
              {item.language}	
              {item.country}	
              {item.awards}
              {item.poster}	
              {/* {item.ratings} */}
              {item.metascore}	
              {item.imdbrating}	
              {item.imdbvotes}
              {item.imdbid}	
              {item.type}	
              {item.dvd}	
              {item.boxoffice}	
              {item.production}	
              {item.website}	
              {item.response}
          </div>
        </div>
      </React.Fragment>
    );
  
}
export default MockMovieSingle;