import React, { useEffect, useState } from 'react'
import { Divider, makeStyles } from '@material-ui/core';
import CommentAdd from './CommentAdd';
import CommentSingle from './CommentSingle';
import { fsDB as db } from './../../util/firebase'
import { useSelector } from 'react-redux';
import SnackBarsRedux from './../../util/SnackBarsRedux'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      paddingBottom: 50,
      alignItems: 'left'
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: 15,
        textAlign: 'left'
    },
    containerComments: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        marginBottom: 15,
    },
    divider: {
        background: 'rgb(63,63,63, 0.2)',
        marginTop: 15,
        marginBottom: 15,
    },
}));

const CommentSection = () => {
    const classes = useStyles();

    const item = useSelector(state => state.movieSection.selectedMovie)
    const [comments, setComments]  = useState([]) 

    const fetchComments = () => {

        db.collection("movies").doc(`${item.id}`)
            .onSnapshot((doc) => {
                // console.log("Current data: ", doc.data());
    
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
 
        }, (error) => {
            console.log("Error getting document, comments:", error);
        });
    }

    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <React.Fragment>
            
            <div className={classes.root}>

                    <div className={classes.title}>
                        
                        <b>{'Comments'}</b>
                        <Divider className={classes.divider}/>
                    
                    </div>
    
                    <div className={classes.containerComments}>
                        
                        {comments.map((item) => (
                            <React.Fragment>
                            
                                <CommentSingle item={item}/>

                            </React.Fragment>

                           
                            
                        ))}
                    </div>

                    <div className={classes.title}>
                    
                        <b>{'Add a comment'}</b>
                        <Divider className={classes.divider}/>
                        <CommentAdd/>
                
                    </div>
                   

            </div>

            <SnackBarsRedux/>

        </React.Fragment>
    );

}

export default CommentSection;
