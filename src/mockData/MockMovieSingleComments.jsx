import React from 'react'
import { Button, Container, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { actions as actionsMovieSection, MovieSectionScreens } from '../redux/features/movieSection'
import MockCommentAdd from './MockCommentAdd';
import MockCommentSingle from './MockCommentSingle';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'row',
      width: '100%',
      height: '100%',
    },
}));

const MockMovieSingleComments = () => {
    const classes = useStyles();

    // const item = useSelector(state => state.movieSection.selectedMovie)
    // const comments = fetch comments by uniqueId (TMDB-id from item.id)?

    return (
        <React.Fragment>
            
            <ButtonBack/>
            <Container className={classes.root}>

                <MockCommentSingle item={'item 1'}/>
                <MockCommentSingle item={'item 2'}/>
                <MockCommentSingle item={'item 3'}/>
                <MockCommentSingle item={'item 4'}/>

                <MockCommentAdd/>

            </Container>

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
                        dispatch(actionsMovieSection.setScreen(MovieSectionScreens.SINGLE_MOVIE))
                    }
                }>{'<<<<'}</Button>   
        </div>
    )
};

export default MockMovieSingleComments;