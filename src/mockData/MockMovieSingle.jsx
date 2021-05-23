import { Button, Divider, makeStyles } from '@material-ui/core';
import React from 'react'
import ShoppingCartActionButtons, { BUTTON_TYPE } from '../components/shopping-cart/ShoppingCartActionButtons';
import ImdbLOGO from './../img/Other/imdb-logo-square.svg'
import { listGenres } from './mock-data-fetcher';
import MockStarsComponent from './MockStarsComponent';
import { createFakeIMDBRating, createPosterPathFull, matchGenreIdsToName, POSTER_SIZES } from './mockFunctions'
import { useDispatch, useSelector } from 'react-redux';
import { actions as actionsMovieSection, MovieSectionScreens } from './../redux/features/movieSection'
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100%',
    },
    containerContent: {
        width: '90%',
        height: '100%',
        margin: 15,
        fontSize: 12,
        borderRadius: 10,
        background: 'rgb(0,0,0, 0.1)'
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row-reverse',
        width: '100%',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'right',
        '& *': {
            marginRight: 5,
        },
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxHeight: '100%',
        margin: 10,
    },
    imageContainer: {
        maxWidth: '95%',
        maxHeight: '30%',
    },
    infoContainer: {
        width: '100%',
        marginLeft: 10,
        '& *': {
            marginTop: 5,
            marginLeft: 5,
            marginRight: 15,
            marginBottom: 10
        },
    },
    image: {
        width: '100%',
        height: '100%',
        textAlign: 'left',
        alignContent: 'left',
        alignItems: 'left',
        justifyContent: 'left',
        background: 'rgb(0,0,0, 0.5)',
        borderRadius: 10,
        objectFit: 'scale-down',
    },
    subBodies: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '70%',
        fontSize: '1.0em',
        textAlign: 'left',
        alignContent: 'left',
        alignItems: 'left',
    },
    title: {
        display: 'flex',
        fontSize: '1em',
        fontWeight: 'bold',
        wordWrap: 'break-word',
        maxWidth: '90%'
    },
    divider: {
        marginTop: 10,
        marginBottom: 10,
        background: 'rgb(68,68,68, 0.5)',
    },
    containerImdb: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    containerBottomButtons: {
        display: 'flex',
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',

    },
    genres: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        '& *': {
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            padding: 5,
            borderRadius: 5,
            background: 'rgb(68,68,68, 0.5)',
        },
    }
}));

const MockMovieSingle = () => {
  
  const classes = useStyles();

  const item = useSelector(state => state.movieSection.selectedMovie)

  const title = item.title
  const releaseDate = item.releaseDate
  const itemOverView = item.overview
  const movieGenresNamed = matchGenreIdsToName(item.genreIds, listGenres);
  const posterPath = createPosterPathFull(POSTER_SIZES.w500, item.posterPath)
  const imdbRating = createFakeIMDBRating()//TODO: Change to variable
 
  return(
        <div id='hover-container' className={classes.root}>

        <ButtonNavigateBack/>
                
        <div className={classes.containerContent}>      
            
            <div className={classes.topRow}>
                <MockStarsComponent/>
                <ImdbRating rating={imdbRating}/>
            </div>

            <div className={classes.mainContainer}>
                
                <div className={classes.imageContainer}>
                    <img className={classes.image} src={posterPath} alt="Movie-poster"></img>
                </div>
            
                <div className={classes.infoContainer}>

                    <div className={classes.title}>
                        {title}
                    </div>
                    
                    <div className={classes.subBodies}>
                        <div>{releaseDate}</div>
                        <div>{itemOverView}</div>
                        <div className={classes.genres}>
                            {movieGenresNamed.map((genre) => {
                                return <div>{genre}</div>
                            })}
                        </div>
                    
                        <div>{'Popularity---->' + item.popularity}</div>
                        <div>{'Vote Avarage:-->' + item.voteAverage}</div>
                        <div>{'Vote Count:---->' + item.voteCount}</div>


                    </div>

                </div>

            </div>

            <Divider className={classes.divider}></Divider>

            <div className={classes.containerBottomButtons}>
  
                    <ShoppingCartActionButtons mItem={item} type={BUTTON_TYPE.CART_ADD}/>    
                    <ButtonNavigateComments/>
             
            </div>
        </div>  
    </div>
  );

}

const ImdbRating = ({ rating }) => {
    const classes = useStyles();

    return(
        <div className={classes.containerImdb}>
            <img src={ImdbLOGO} style={{width: '2em', height: '2em', marginRight: '0.6em'}} alt='poster'/>
            <h5>{rating}</h5>     
        </div>
    );

};

const ButtonNavigateComments = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <Button
                variant={'contained'}
                color={'default'}
                startIcon={<StarBorderIcon/>}
                // className={classes.root}
                onClick={
                    () => {
                        dispatch(actionsMovieSection.setScreen(MovieSectionScreens.SINGLE_MOVIE_COMMENTS))
                    }
                }>{'COMMENTS'}</Button>   
        </div>
    )
};

//SHOULD USE GLOBAL NAV BUTTON WITH SWITCH
const ButtonNavigateBack  = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <Button
                variant={'outlined'}
                color={'primary'}
                // className={classes.root}
                onClick={
                    () => {
                        dispatch(actionsMovieSection.setScreen(MovieSectionScreens.GRID_MOVIES))
                    }
                }>{'<<<<'}</Button>   
        </div>
    )
};

export default MockMovieSingle;