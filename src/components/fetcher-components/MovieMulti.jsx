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
      display: 'flex',
      width: '100%',
      fontSize: 12,
      flexDirection: 'column',
      textShadow: '1px 1px #000',
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        borderRadius: 10,
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    topRow: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row-reverse',
        alignContent: 'end',
        alignItems: 'center',
        justifyContent: 'end',
    },
    infoContainer: {
        width: '90%',
        height: '100%',
        marginLeft: '5%',
        // background: 'red',
        minHeight: '30vh',
    },
    divider: {
        marginTop: 2,
        marginBottom: 10,
        background: 'rgb(175,175,175, 0.2)',
        maxWidth: '100%',
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1em',
        fontWeight: 'bold',
        wordWrap: 'break-word',
        maxWidth: '90%',
        textAlign: 'left',
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
    bottomRow: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row-reverse',
        alignContent: 'end',
        alignItems: 'end',
        justifyContent: 'end',
        background: 'linear-gradient(to top, rgb(0, 0, 0, 0.8), rgb(38, 38, 38, 0.6))',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
}));

const MovieMulti = ({ item, useId }) => {
  
  const classes = useStyles();

  const useID = useId
  const title = item.title
  const releaseDate = item.releaseDate
  const itemOverView = String(item.overview).slice(0, 200) + ' ...'
  const movieGenresNamed = matchGenreIdsToName(item.genreIds, MockGenres.genres)
  const posterPath = createPosterPathFull(POSTER_SIZES.w300, item.posterPath)
  const imdbRating = createFakeIMDBRating()//TODO: Change to variable

  return(
        <div id={`${useID} ${item.id}`}
            className={classes.root}>

            <div className={classes.mainContainer} 
                style={{backgroundImage: `linear-gradient(to top, rgb(36, 36, 36, 0.3), rgb(15, 15, 15, 0.6)), url(${posterPath})`}}
                >
        
               
                <div className={classes.topRow}>
                    {/* <ImdbRating rating={imdbRating}/> */}
                    <ButtonMore mItem={item}/>
                </div>
            
                <Divider className={classes.divider}/>
                {/* <img className={classes.image} src={`${posterPath}`}></img> */}

                <div className={classes.infoContainer}>

                    <div className={classes.title}>
                        <i style={{fontSize: 12}}>{title}</i>
                    </div>

                    <div className={classes.year}>
                        <i style={{fontSize: 12}}>{String(releaseDate).slice(0, 4)}</i>
                    </div>
                    
                    <div className={classes.title}>
                        <StarsComponent/>
                    </div>
         
                    <div className={classes.genres}>
                        {movieGenresNamed.map((genre) => {
                            return <div>{genre}</div>
                        })}
                    </div>
              
                    
                </div>

                <div className={classes.bottomRow}>
                    <ShoppingCartActionButtons mItem={item} type={BUTTON_TYPE.CART_ADD}/>
                 </div>

               
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