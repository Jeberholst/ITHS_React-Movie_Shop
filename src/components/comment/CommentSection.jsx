import React from 'react'
import { Button, Container, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { actions as actionsMovieSection, MOVIE_SECTION_SCREENS } from '../../redux/features/movieSection'
import CommentAdd from './CommentAdd';
import CommentSingle from './CommentSingle';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '95%',
      height: '100%',
      paddingBottom: 50,
      alignItems: 'center'
    },
}));

const CommentSection = () => {
    const classes = useStyles();

    // const item = useSelector(state => state.movieSection.selectedMovie)
    // const comments = fetch comments by uniqueId (TMDB-id from item.id)?

    return (
        <React.Fragment>
            
            <ButtonBack/>
            <div className={classes.root}>
    
                    <CommentSingle/>
                    <CommentSingle/>
                    <CommentSingle/>
                    <CommentSingle/>
                    <CommentAdd/>

            </div>

        </React.Fragment>
    );

}

const ButtonBack  = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <Button
                variant={'outlined'}
                color={'primary'}
                // className={classes.root}
                onClick={
                    () => {
                        dispatch(actionsMovieSection.setScreen(MOVIE_SECTION_SCREENS.SINGLE_MOVIE))
                    }
                }>{'<<<<'}</Button>   
        </div>
    )
};

export default CommentSection;