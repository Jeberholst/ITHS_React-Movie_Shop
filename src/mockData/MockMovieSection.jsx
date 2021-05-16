import React from 'react'
import { makeStyles } from '@material-ui/core';
import { listPopular } from './mock-data-fetcher'
import MockMoviePopular from './MockMoviePopular';

//TODO: MediaQuery on screen-size, change gridTemplateColumns

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'grid',
      width: '100%',
      height: '100%',
      marginTop: 10,
      marginBottom: 10,
      gridTemplateColumns: '30% 30% 30%',
      gap: 5,
    },
    rootGrid: {
        display: 'grid',
        width: '100%',
        height: '100%',
        marginTop: 10,
        marginBottom: 10,
        gridTemplateColumns: '30% 30% 30%',
        gap: 5,
    },
    rootSingle: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        height: '100%',
        marginTop: 10,
        marginBottom: 10,
    },
    rootSearch: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        height: '100%',
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
    },
}));
  

const MockMovieSection = ({ screen }) => {
    const currentScreen = String(screen)
    
     switch(currentScreen){
        case "MovieGrid":
            return (
                <MovieSectionGrid></MovieSectionGrid>
            )
        case "MovieSearch": 
            return (
                <MovieSearchList></MovieSearchList>
            )
        case "MovieSingle": 
            return (
                <MovieSectionSingle></MovieSectionSingle>
            )
        default:
            return(
                <React.Fragment></React.Fragment>
            )         
    };

};

export default MockMovieSection;

const MovieSectionGrid = () => {
    const classes = useStyles();
    const useList = listPopular

    return (
        <React.Fragment>

            <div className={classes.rootGrid}>
                {console.log('Use list: ', useList)}

                {useList.map((item) => (
                    <MockMoviePopular key={'paged-' + item.id} item={item}/>
                ))}

            </div>

        </React.Fragment>
    );


}

const MovieSearchList = () => {
    const classes = useStyles();

    return (
        <React.Fragment>

            <div className={classes.rootSearch}>

            </div>

        </React.Fragment>
    );

}

const MovieSectionSingle = () => {
    const classes = useStyles();

    return (
        <React.Fragment>

            <div className={classes.rootSingle}>

            </div>

        </React.Fragment>
    );

}