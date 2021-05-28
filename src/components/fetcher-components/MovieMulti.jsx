import { Button, Divider, IconButton, makeStyles } from '@material-ui/core';
import React from 'react'
import ShoppingCartActionButtons, { BUTTON_TYPE } from '../shopping-cart/ShoppingCartActionButtons';
import ImdbLOGO from './../../img/Other/imdb-logo-square.svg'
import { createPosterPathFull, POSTER_SIZES } from "../../helper-functions/poster";
import StarsComponent from '../shared-components/StarsComponent';
import { actions as actionsMovieSection, MOVIE_SECTION_SCREENS } from '../../redux/features/movieSection'
import { useDispatch } from 'react-redux';
import { matchGenreIdsToName } from '../../helper-functions/genres';
import MockGenres from '../../mockData/mock-data-genre.json';
import { MoreHorizRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '90%',
      height: '100%',
      margin: 5,
      fontSize: 12,
      borderRadius: 10,
      background: 'rgb(0,0,0, 0.1)',
      flexWrap: 'column-reverse',
      textShadow: '1px 1px #000'
    },
    topRow: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row-reverse',
        textAlign: 'end',
        alignContent: 'end',
        alignItems: 'center',
        justifyContent: 'end',
        '& *': {
            marginRight: 5,
        },
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        maxHeight: '100%',
        margin: 10,
        minHeight: '40vh',
    },
    imageContainer: {
        width: '30%',
        height: '40%'
    },
    infoContainer: {
        width: '65%',
        marginLeft: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        textAlign: 'left',
        alignContent: 'left',
        alignItems: 'left',
        justifyContent: 'left',
        background: 'rgb(0,0,0, 0.5)',
        objectFit: 'fit-content',
    },
    subBodies: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '1.0em',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textShadow: '1px 1px #000'
    },
    containerOverView: {
        textAlign: 'left',
        maxWidth: '70%',
        maxHeight: '100%',
        textShadow: '1px 1px #000'
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1em',
        fontWeight: 'bold',
        wordWrap: 'break-word',
        maxWidth: '90%'
    },
    divider: {
        marginTop: 10,
        marginBottom: 10,
        background: 'rgb(175,175,175, 0.5)',
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
        flexWrap: 'wrap-reverse',
        flexDirection: 'row-reverse',
        height: 'fit-content',
        alignItems: 'bottom',
        '& *': {
            marginRight: 5,
        },
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

const MovieMulti = ({ item }) => {
  
  const classes = useStyles();

  const title = item.title
  const releaseDate = item.releaseDate
  const itemOverView = String(item.overview).slice(0, 200) + ' ...'
  const movieGenresNamed = matchGenreIdsToName(item.genreIds, MockGenres.genres)
  const posterPath = createPosterPathFull(POSTER_SIZES.w300, item.posterPath)
  const imdbRating = createFakeIMDBRating()//TODO: Change to variable

  return(
        <div id='hover-container' className={classes.root} 
            style={{backgroundImage: `url(${posterPath})`, 
            backgroundRepeat: 'repeat-x', 
            boxShadow: '0 0 2px 2px rgb(175,175,175, 0.2) inset'}} >

            <div className={classes.topRow}>
                {/* <ImdbRating rating={imdbRating}/> */}
                <ButtonMore mItem={item}/>
                <ShoppingCartActionButtons mItem={item} type={BUTTON_TYPE.CART_ADD}/>
            </div>

            <div className={classes.mainContainer}>
                
                {/* <div className={classes.imageContainer}>
                    <img className={classes.image} src={posterPath} alt="Movie-poster"></img>
                </div> */}
            
                <div className={classes.infoContainer}>

                    <div className={classes.title}>
                        <i style={{fontSize: 12}}>{title}</i>
                    </div>

                    <div className={classes.year}>
                        <i style={{fontSize: 12}}>{releaseDate}</i>
                    </div>
                    
                    <div className={classes.subBodies}>
                    <StarsComponent/>
                    </div>

                    <div className={classes.subBodies}>
                        <div className={classes.genres}>
                            {movieGenresNamed.map((genre) => {
                                return <div>{genre}</div>
                            })}
                        </div>
                
                    </div>

                    <div className={classes.containerOverView}>
                        <p>{itemOverView}</p>
                        <i>{'...read more'}</i>
                    </div>
                    
                </div>

                <Divider className={classes.divider}></Divider>


            </div>



    </div>
  );

}


//TODO: Move to single-file component for re-usage
const ImdbRating = ({ rating }) => {
    const classes = useStyles();

    return(
        <div className={classes.containerImdb}>
            <img src={ImdbLOGO} style={{width: '2em', height: '2em', marginRight: '0.6em'}} alt='poster'/>
            <h5>{rating}</h5>     
        </div>
    );

};


//TODO: Move to single-file component for re-usage
const bMoreUseStyle = makeStyles((theme) => ({
    root: {
      '& *': {
   
      },
    },
}));

const ButtonMore = ({ mItem }) => {
    const classes = bMoreUseStyle();
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

export default MovieMulti;

export function createFakeIMDBRating(){
    return (Math.random() * 10).toFixed(2); 
}