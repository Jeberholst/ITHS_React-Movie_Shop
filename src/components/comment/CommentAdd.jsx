import { Button, Divider, makeStyles, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import authService from '../../util/auth-service';
import firebase from "firebase/app";
import { useSelector } from 'react-redux';
import { fsDB as db } from './../../util/firebase'

const strAddComment = "Add a comment"
const strButtonText = "Comment"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        fontSize: 12,
        borderRadius: 10,
        background: 'rgb(32,32,32, 0.6)',
        flexWrap: 'column-reverse',
    },
    header: {
        display: 'flex',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        textIndent: 15
    },
    divider: {
        background: 'rgb(255,255,255, 0.1)',
        marginTop: 10,
        marginBottom: 10,
    },
    containerComment: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 20,
    },
    textField: {
        display: 'flex',
        alignContent: 'left',
        marginTop: 30,
        marginBottom: 10,
        background: 'white'
    },
    containerButton: {
        display: 'flex',
        flexDirection: 'row-reverse'
    },
    containerProfileInfo: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        textAlign: 'left',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    profileImg: {
        width: '50px',
        height: '50px',
        borderRadius: 25,
        objectFit: 'cover'
    },
    profileName: {
        fontSize: 14, 
        marginLeft: 10, 
        height: '100%',
    },
    rootNotSignedIn: {
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
    }
}));

const userInitialState = {
    displayName: null,
    photoUrl: null
}


//MOVE TO SEPARATE?
class FirebaseUser {
    
    constructor (displayName, photoUrl, uid, comment, rating) {
        this.displayName = displayName;
        this.photoUrl = photoUrl;
        this.uid = uid;
        this.comment = comment;
        this.rating = rating;
    }

    toString() {
        return this.displayName + ', ' + this.photoUrl + ', ' + this.uid;
    }

    toFirestore(data) {
        return {
            displayName: data.displayName,
            photoUrl: data.photoUrl,
            uid: data.uid,
            comment: data.comment,
            rating: data.rating,
        };
    }
}




const CommentAdd = () => {

    const classes = useStyles();

    const item = useSelector(state => state.movieSection.selectedMovie)
    const [currentUser, setCurrentUser] = useState(userInitialState);

    useEffect(() => {
      let cUser = firebase.auth().currentUser;
     
      if(cUser !== null){
        setCurrentUser(cUser)
        // console.log('Current user set:', cUser)
      }
    }, [])

     //TODO: USE COMMENT FROM FIELD
     //TODO: SET RATING

    //MOVE TO SEPARATE .js
    const addComment = async(userRating) => {

        const movieRef = db.collection("movies").doc(`${item.id}`)

        return db.runTransaction((transaction) => {

            return transaction.get(movieRef).then((sfDoc) => {
                
                var newTotalRating = userRating
                var newVoteCount = 1

                if (!sfDoc.exists) {
                    // "No doc exists!";
                }

                console.log(newTotalRating)


                newTotalRating = (sfDoc.data() !== undefined) ? (sfDoc.data().totalRating + 3 ): userRating
                newVoteCount = (sfDoc.data() !== undefined) ? (sfDoc.data().voteCount + 1 ): 1

                var newAverageRating = newTotalRating / newVoteCount
                
                const user = new FirebaseUser(currentUser.displayName, currentUser.photoURL, currentUser.uid, 'En kommentar', userRating)
                console.log('curr user info', user.toFirestore(user))

             
                let newDocProps = {
                    averageRating: newAverageRating,
                    totalRating: newTotalRating,
                    voteCount: newVoteCount,
                    comments: firebase.firestore.FieldValue.arrayUnion(user.toFirestore(user))
                }
       
                transaction.update(movieRef, newDocProps);
                     

            });
        
        }).then(() => {

            console.log("Transaction successfully committed!");

        }).catch((error) => {

            console.log("Transaction failed: ", error);

        });
        

    }

    const backUpProfilePhoto = 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/142819271/original/09dafa4104fa6aeca4e62f33326be4933ae7ccac/create-cartoon-profile-picture-abd7.jpg'

    return currentUser.displayName ? (
        <div className={classes.root}>

            <div className={classes.header}>
                {strAddComment}
            </div>
               
            <Divider className={classes.divider}/>

            <div className={classes.containerProfileInfo}>
                        
                <img 
                    className={classes.profileImg}
                    alt={'profile'} 
                    src={currentUser.photoUrl ? currentUser.photoUrl: backUpProfilePhoto}/>
            

                <b
                    className={classes.profileName}>
                    {currentUser.displayName ? currentUser.displayName : 'Not signed in'}
                </b>

            </div>

            <div className={classes.containerComment}>

                <TextField
                    className={classes.textField}
                    not-required
                    id="filled-required"
                    label="Comment"
                    defaultValue=""
                    variant="filled"
                    />

                    <Button
                        variant={'contained'}
                        color={'secondary'}
                        onClick={
                                () => { addComment(5) }
                            }
                        >
                        {strButtonText}
                        
                    </Button>

            
            </div>

        </div>

    )
    : <NotSignedIn/>


}

const NotSignedIn = () => {
    
    const classes = useStyles();

    return(
        <React.Fragment>

            <div className={classes.rootNotSignedIn}>
               
                <b>You need to sign in in order to add a comment.</b>

                <Button
                    style={{width: '30%'}}
                    variant={'contained'}
                    color={'secondary'}
                    onClick={
                        () => { console.log('Move to sign-in... popup?')}
                    }>
                    Sign in
                    </Button>
            </div>
 

        </React.Fragment>
    )

}

export default CommentAdd;