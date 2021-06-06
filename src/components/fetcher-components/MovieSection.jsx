import React from 'react'
import { makeStyles } from '@material-ui/core';
import MovieMulti from './MovieMulti';
import { useSelector } from 'react-redux';
import { MOVIE_SECTION_SCREENS } from '../../redux/features/movieSection';
import MovieSingle from './MovieSingle';
import CommentSection from '../comment/CommentSection';
import './MovieSection.css'
import MovieSectionLanding from './MovieSectionLanding';

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
    rootGrid: {
        display: 'grid',
        maxWidth: '100%',
        minWidth: '95%',
        gridTemplateColumns: '50% 50%',
        marginTop: 10,
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
    rootCommentSection: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    rootSingle: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        alignContent: 'center',
    },
    rootColumns: {
        display: 'flex',
        flexDirection: 'column', 
        width: '100%',
        height: '100%',
        marginTop: 10,
        marginBottom: 10,
    }
}));

const MovieSection = ( {...props } ) => {

    const classes = useStyles();

    const screen = useSelector(state => state.movieSection.screen)
    const RESULT = props.RESULT

    if(RESULT !== null){

        console.log('CurrentScreen:', screen)
       
        switch(String(screen)){
           case MOVIE_SECTION_SCREENS.SLIDER_MOVIES:
               return (
                    <div className={classes.rootSlider}>

                        {RESULT.map((item) => (
                            <MovieMulti key={'sliding-' + item.id} item={item} useId={'hover-container-slider'}/>
                        ))}

                    </div>
               )
          case MOVIE_SECTION_SCREENS.GRID_MOVIES:
                return (
                     <div className={classes.rootSlider}>
 
                         {RESULT.map((item) => (
                             <MovieMulti key={'grid-' + item.id} item={item} useId={'hover-container-slider'}/>
                         ))}
 
                     </div>
                )
           case MOVIE_SECTION_SCREENS.LIST_GENRES: 
               return (
                    <div className={classes.rootGrid}>

                        {RESULT.map((item) => (
                            <MovieMulti key={'genre-' + item.id} useId={'hover-container-genre'} />
                        ))}

                    </div>
               )
            case MOVIE_SECTION_SCREENS.LIST_LANDING: 
               return (
                    <div className={classes.rootColumns}>
                        <MovieSectionLanding result={RESULT}/>
                    </div>
               )
           case MOVIE_SECTION_SCREENS.SINGLE_MOVIE: 
               return (
                    <div className={classes.rootSingle}>
                        <MovieSingle/>
                    </div>
               )
           case MOVIE_SECTION_SCREENS.SINGLE_MOVIE_COMMENTS: 
               return (
                    <div className={classes.rootCommentSection}>
                        <CommentSection/>
                    </div>
                )
           case MOVIE_SECTION_SCREENS.QUICK_ADD: 
               return (
              
                 <div className={classes.rootMulti}>

                    {RESULT.map((item) => (
                        <MovieMulti key={'q-add-' + item.id} item={item}/>
                    ))}

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

export default MovieSection;
