import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { actions as actionsMovieSection, MOVIE_SECTION_SCREENS } from '../../redux/features/movieSection'
import CommentAdd from './CommentAdd';
import CommentSingle from './CommentSingle';
import { fsDB as db } from './../../util/firebase'
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      paddingBottom: 50,
      alignItems: 'center'
    },
    containerComments: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        marginBottom: 15,
    }
}));


const CommentSection = () => {
    const classes = useStyles();

    const item = useSelector(state => state.movieSection.selectedMovie)
    const [comments, setComments]  = useState([]) //RENAME TO commentsAndRating
    //TODO: use RATING AND CONVERT TO x AMOUNT OF STARS

    const fetchComments = () => {

        //MOVE TO SEPARATE .js
        const movieRef = db.collection("movies").doc(`${item.id}`)
        
        movieRef.get()
            .then((doc) => {
                if (doc.exists) {
                    
                    const data = doc.data()
                    const tempArr = [];

                    data.comments.map((item) => (
                        tempArr.push(item)
                    ))

                    setComments(tempArr)
                    

                } else {
                 
                    setComments([])
                    
                }

        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }

    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <React.Fragment>
            
            <div className={classes.root}>
    
                    <div className={classes.containerComments}>
                        
                        {comments.map((item) => (
                            <React.Fragment>
                            
                                <CommentSingle item={item}/>

                            </React.Fragment>

                           
                            
                        ))}
                    </div>

  
                    <CommentAdd/>

            </div>

        </React.Fragment>
    );

}


export default CommentSection;