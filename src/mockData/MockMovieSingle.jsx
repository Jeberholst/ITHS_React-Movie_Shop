import { Divider, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import ShoppingCartActionButtons, { BUTTON_TYPE } from '../components/shopping-cart/ShoppingCartActionButtons';
import ImdbLOGO from './../img/Other/imdb-logo-square.svg'
import { listGenres } from './mock-data-fetcher';
import MockStarsComponent from './MockStarsComponent';
import { createFakeIMDBRating, createPosterPathFull, matchGenreIdsToName, POSTER_SIZES } from './mockFunctions'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
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
        flexDirection: 'row',
        width: '100%',
        maxHeight: '100%',
        margin: 10,
    },
    imageContainer: {
        width: '30%',
    },
    infoContainer: {
        width: '65%',
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
        objectFit: 'fit-content',
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
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
    }
}));

const MockMovieSingle = ( { item } ) => {
  
  const classes = useStyles();

  const title = item.title
  const releaseDate = item.releaseDate
  const itemOverView = item.overview
  const movieGenresNamed = matchGenreIdsToName(item.genreIds, listGenres);
  const posterPath = createPosterPathFull(POSTER_SIZES.w500, item.posterPath)
  const imdbRating = createFakeIMDBRating()//TODO: Change to variable
 
  return(
        <div id='hover-container' className={classes.root}>
                
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
                    <div>{movieGenresNamed}</div>
                    <div>{'Popularity---->' + item.popularity}</div>
                    <div>{'Vote avarge:-->' + item.voteAverage}</div>
                    <div>{'Vote Count:---->' + item.voteCount}</div>
                </div>

            </div>

        </div>

        <Divider className={classes.divider}></Divider>

        <div className={classes.containerBottomButtons}>
            <ShoppingCartActionButtons mItem={item} type={BUTTON_TYPE.CART_ADD}/>    
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

export default MockMovieSingle;