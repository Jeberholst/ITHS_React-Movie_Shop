import React from 'react'
import { makeStyles } from '@material-ui/core';
import MockMoviePopular from '../../mockData/MockMoviePopular';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
        height: '100%',
    },
    rootGrid: {
        // display: 'flex',
        // flexDirection: 'column',
        // width: '95%',
        // height: '100%',
        marginTop: 10,
        marginBottom: 10,
        //TESTING
        display: 'grid',
        flexWrap: 'row wrap',
        gridTemplateColumns: "33% 33% 33%",
        gap: 5,
    },
}));

const MovieGridLoader = ({...props}) => {

    const classes = useStyles();

    if(props.RESULT !== null){
        return (
            <React.Fragment>

                <div className={classes.root}>
                    <div className={classes.rootGrid}>

                        {props.RESULT.map((item) => (
                            <MockMoviePopular key={'paged-' + item.id} item={item}/>
                        ))}

                    </div>
                </div>

            </React.Fragment>
        );
    } else {
        return(
            null
        );
    }
}

export default MovieGridLoader;