import React from 'react'
import { makeStyles } from '@material-ui/core';
import MovieMulti from './MovieMulti';
import { useSelector } from 'react-redux';
import { MOVIE_SECTION_SCREENS } from '../../redux/features/movieSection';
import './MovieSection.css'
import MovieSingle from './MovieSingle';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rootMulti: {
        display: 'flex',
        overflowX: 'scroll',
        maxWidth: '100%',
        minWidth: '95%',
        marginTop: 25,
        marginBottom: 10,
        paddingBottom: 30,
    },
    rootSlider: {
        display: 'flex',
        overflowX: 'scroll',
        maxWidth: '100%',
        minWidth: '95%',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 30,
    },
}));

const MovieSectionPontus = () => {

    const classes = useStyles();

    const screen = useSelector(state => state.movieSection.screen)
    const RESULT = useSelector(state => state.movieSection.movieList)

    if(RESULT !== null){
       
        switch(String(screen)){
          case MOVIE_SECTION_SCREENS.GRID_MOVIES:
                return (
                     <div className={classes.rootSlider}>
 
                         {RESULT.map((item) => (
                             <MovieMulti key={'grid-' + item.id} item={item} useId={'hover-container-slider'}/>
                         ))}
 
                     </div>
                )
            case MOVIE_SECTION_SCREENS.SINGLE_MOVIE: 
                return (
                     <div className={classes.rootSingle}>
                         <MovieSingle/>
                     </div>
                )
           default:
               return(
                   <React.Fragment></React.Fragment>
               )         
       };

 
    } else {
        return(
            null
        );
    }
}

export default MovieSectionPontus;
