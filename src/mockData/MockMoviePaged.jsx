import { Button, Container, Divider, makeStyles, Paper } from '@material-ui/core';
import React from 'react'
import ShoppingCartActionButtons from '../components/shopping-cart/ShoppingCartActionButtons';
import ImdbLOGO from './../img/Other/imdb-logo-square.svg'
import MockStarsComponent from './MockStarsComponent';

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
        display: 'block',
        textAlign: 'right',
        alignContent: 'right',
        alignItems: 'right',
    }
}));

const MockMoviePaged = ( { item } ) => {
  
    const classes = useStyles();

  const title = item.title
  const year = item.year
  const poster = item.poster
  const imdbRating = (Math.random() * 10).toFixed(2); //TODO: Change to variable

  return(
        <div id='hover-container' className={classes.root}>
                
        <div className={classes.topRow}>
            <MockStarsComponent/>
            <ImdbRating rating={imdbRating}/>
        </div>

        <div className={classes.mainContainer}>
            
            <div className={classes.imageContainer}>
                <img className={classes.image} src={poster} alt="Movie-poster"></img>
            </div>
        
            <div className={classes.infoContainer}>

                <div className={classes.title}>
                    {title}
                </div>
                
                <div className={classes.subBodies}>
                    {year}
                </div>

                <div className={classes.subBodies}>
     
                </div>
            
            </div>

        </div>

        <Divider className={classes.divider}></Divider>

        <div className={classes.containerBottomButtons}>
            <ShoppingCartActionButtons mItem={item} ACTIONS={'add'}/>    
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
  
export default MockMoviePaged;