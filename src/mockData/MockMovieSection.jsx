import React from 'react'
import { makeStyles } from '@material-ui/core';
import { listPopular } from './mock-data-fetcher'
import MockMoviePopular from './MockMoviePopular';
import MockMovieSingle from './MockMovieSingle';
import { useSelector } from 'react-redux';
import { MovieSectionScreens } from './../redux/features/movieSection'
import MockMovieSingleComments from './MockMovieSingleComments';

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
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
        height: '100%',
        marginTop: 10,
        marginBottom: 10,
        //TESTING
        // display: 'grid',
        // flexWrap: 'row wrap',
        // gridTemplateColumns: "25% 25% 25%",
        // gap: 5,
    },
    rootSingle: {
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
        height: '100%',
        marginTop: 10,
        marginBottom: 10,
    },
    rootSingleComments: {
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
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
    rootQuickAdd: {
        display: 'grid',
        width: '95%',
        height: '100%',
        marginTop: 10,
        marginBottom: 10,
        //TESTING
        gap: 5,

        // flexWrap: 'row wrap',
        // gridTemplateColumns: "25% 25% 25%",
        // gap: 5,
    },
}));
  

const MockMovieSection = () => {
    //   const currentScreen = String(screen)

     const screen = useSelector(state => state.movieSection.screen)
     console.log('CurrentScreen:', screen)
    
     switch(String(screen)){
        case MovieSectionScreens.GRID_MOVIES:
            return (
                <MovieSectionGrid/>
            )
        case MovieSectionScreens.LIST_SEARCHES: 
            return (
                <MovieSearchList/>
            )
        case MovieSectionScreens.SINGLE_MOVIE: 
            return (
                <MovieSectionSingle/>
            )
        case MovieSectionScreens.SINGLE_MOVIE_COMMENTS: 
            return (
                <MovieSectionSingleMovieComments/>
            )
        case MovieSectionScreens.QUICK_ADD: 
            return (
                <MovieSectionQuickAdd/>
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

                {useList.map((item) => (
                    <MockMoviePopular key={'paged-' + item.id} item={item}/>
                ))}

            </div>

        </React.Fragment>
    );


}

const MovieSectionQuickAdd = () => {
    const classes = useStyles();
    const useList = listPopular

    return (
        <React.Fragment>

            <div className={classes.rootGrid}>

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
                <MockMovieSingle/>
            </div>
        </React.Fragment>
    );

}

const MovieSectionSingleMovieComments = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.rootSingleComments}>
               <MockMovieSingleComments/>
            </div>
        </React.Fragment>
    );

}
