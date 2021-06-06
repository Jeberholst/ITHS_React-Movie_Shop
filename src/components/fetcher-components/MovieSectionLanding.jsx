import { Button, Divider, IconButton, makeStyles } from '@material-ui/core';
import React from 'react'
import ShoppingCartActionButtons, { BUTTON_TYPE } from '../shopping-cart/ShoppingCartActionButtons';
import ImdbLOGO from './../../img/Other/imdb-logo-square.svg'
import { createPosterPathFull, POSTER_SIZES } from "../../helper-functions/poster";
import StarsComponent from '../shared-components/StarsComponent';
import { actions as actionsMovieSection, MOVIE_SECTION_SCREENS } from '../../redux/features/movieSection'
import { useDispatch, useSelector } from 'react-redux';
import { MoreHorizRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      textShadow: '1px 1px #000',
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        borderRadius: 10,
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat',
        marginLeft: '2%',
        marginRight: '2%',
    },
    infoContainer: {
        width: '90%',
        height: '100%',
        // background: 'red',
        minHeight: '30vh',
        padding: '10%'
    },
    divider: {
        marginTop: 2,
        marginBottom: 10,
        background: 'rgb(175,175,175, 0.2)',
        maxWidth: '100%',
    },
    genreTitle: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '1.5em',
        fontWeight: 'bold',
        margin: '5%',
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '0.8em',
        fontWeight: 'bold',
        wordWrap: 'break-word',
        maxWidth: '90%',
        textAlign: 'left',
        marginBottom: 5
    },
    year: {
        textAlign: 'left',
        maxWidth: '90%',
    },
    genres: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        '& *': {
            marginTop: 5,
            marginRight: 5,
            padding: 5,
            borderRadius: 5,
            background: 'rgb(68,68,68, 0.5)',
        },
    },
}));

const MovieSectionLanding = ({ result }) => {
  
  const classes = useStyles();

  return(
                               
        <React.Fragment>
                        
            {result.map((item) => (
                <div className={classes.root}>
                    
                    <div className={classes.genreTitle}>
                        <b>{item.name}</b>
                    </div>
                   
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: '100%', overflowX: 'scroll'}}>
                        
                        {
                            item.movies.map((movie) => (
                            
                                <div className={classes.mainContainer} 
                                    style={{
                                        backgroundImage: `linear-gradient(to top, rgb(36, 36, 36, 0.3), rgb(15, 15, 15, 0.6)), url(${createPosterPathFull(POSTER_SIZES.w400, movie.backdrop_path)})`
                                    }}>
                                    

                                    <div className={classes.infoContainer}>
                                       
                                        <div className={classes.title}> 
                                            {movie.original_title} 

                                        </div>

                                        <div className={classes.year}>
                                            <i>{String(movie.release_date).slice(0, 4)}</i>
                                        </div>


                                    </div>
                           

                                
                                
                            
                                </div>
                        ))}

                    </div>

                    {/* <p>{'SOME ITEM'} {item.movies} </p> */}
                    </div>

            ))}
            
        </React.Fragment>
  );

}

const ButtonMore = ({ mItem }) => {
   
    const dispatch = useDispatch();

    return (
        <div>
            <IconButton
                aria-label="more"
                fontSize="medium"
                color={'secondary'}
                onClick={
                    () => {
                        dispatch(actionsMovieSection.setScreen(MOVIE_SECTION_SCREENS.SINGLE_MOVIE))
                        dispatch(actionsMovieSection.setSelectedMovie(mItem))
                    }}
                >
                    <MoreHorizRounded/>
            </IconButton>

         
        </div>
    );
}

export default MovieSectionLanding;