// import React from 'react'
// import { Button, Container, makeStyles } from '@material-ui/core';
// import { useDispatch } from 'react-redux';
// import { actions as actionsMovieSection, MOVIE_SECTION_SCREENS } from '../../redux/features/movieSection'
// import CommentAdd from './CommentAdd';
// import MockCommentSingle from './MockCommentSingle';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       flexDirection: 'column',
//       flexWrap: 'row',
//       width: '100%',
//       height: '100%',
//     },
// }));

// const CommentSection = () => {
//     const classes = useStyles();

//     // const item = useSelector(state => state.movieSection.selectedMovie)
//     // const comments = fetch comments by uniqueId (TMDB-id from item.id)?

//     return (
//         <React.Fragment>
            
//             <ButtonBack/>
//             <Container className={classes.root}>

//                 <MockCommentSingle item={'item 1'}/>
//                 <MockCommentSingle item={'item 2'}/>
//                 <MockCommentSingle item={'item 3'}/>
//                 <MockCommentSingle item={'item 4'}/>

//                 <CommentAdd/>

//             </Container>

//         </React.Fragment>
//     );

// }

// const ButtonBack  = () => {

//     const dispatch = useDispatch();

//     return (
//         <div>
//             <Button
//                 variant={'outlined'}
//                 color={'primary'}
//                 // className={classes.root}
//                 onClick={
//                     () => {
//                         dispatch(actionsMovieSection.setScreen(MOVIE_SECTION_SCREENS.SINGLE_MOVIE))
//                     }
//                 }>{'<<<<'}</Button>   
//         </div>
//     )
// };

// export default CommentSection;