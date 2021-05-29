import React from 'react'
import { makeStyles } from '@material-ui/core';
import MovieMulti from './MovieMulti';
import { useSelector } from 'react-redux';
import { MOVIE_SECTION_SCREENS } from '../../redux/features/movieSection';
import MovieSingle from './MovieSingle';
import CommentSection from '../comment/CommentSection';

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
    rootGrid: {
        // display: 'flex',
        // flexDirection: 'column',
        width: '95%',
        // height: '100%',
        marginTop: 10,
        marginBottom: 10,
        //TESTING
        display: 'grid',
        flexWrap: 'row wrap',
        gridTemplateColumns: "32% 32% 32%",
        gap: 5,
        justifyContent: 'center'
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
}));

const MovieSection = ({...props}) => {

    const classes = useStyles();

    const screen = useSelector(state => state.movieSection.screen)
    const RESULT = props.RESULT

    if(RESULT !== null){

        console.log('CurrentScreen:', screen)
       
        switch(String(screen)){
           case MOVIE_SECTION_SCREENS.GRID_MOVIES:
               return (
                    <div className={classes.rootGrid}>

                     {RESULT.map((item) => (
                        <MovieMulti key={'paged-' + item.id} item={item}/>
                     ))}

                    </div>
               )
           case MOVIE_SECTION_SCREENS.LIST_SEARCHES: 
               return (

                <div className={classes.rootGrid}>
                    {RESULT.map((item) => (
                        <MovieMulti key={'paged-' + item.id} item={item}/>
                    ))}
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
              
                 <div className={classes.rootGrid}>

                    {RESULT.map((item) => (
                        <MovieMulti key={'paged-' + item.id} item={item}/>
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
