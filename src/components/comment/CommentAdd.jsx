import { Button, Divider, makeStyles, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import authService from '../../util/auth-service';
import firebase from "firebase/app";

const strAddComment = "Add a comment"
const strButtonText = "Comment"


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
        height: '100%',
        fontSize: 12,
        padding: 20,
        borderRadius: 10,
        background: 'rgb(32,32,32, 0.6)',
        flexWrap: 'column-reverse',
    },
    header: {
        display: 'flex',
        fontSize: 16,
    },
    divider: {
        background: 'rgb(255,255,255, 0.1)',
        marginTop: 10,
        marginBottom: 30,
    },
    containerComment: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 25,
        marginRight: 25,
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
        textAlign: 'center',
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

const CommentAdd = () => {

    const classes = useStyles();

    const [user, setCurrentUser] = useState(userInitialState);

    useEffect(() => {
      let cUser = firebase.auth().currentUser;
      if(cUser !== null){
        setCurrentUser(cUser)
        console.log('Current user set:', cUser)
      }
    }, [])

    const backUpProfilePhoto = 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/142819271/original/09dafa4104fa6aeca4e62f33326be4933ae7ccac/create-cartoon-profile-picture-abd7.jpg'

    return user.displayName ? (
        <div className={classes.root}>

            <div className={classes.header}>
                {strAddComment}
            </div>
               
            <Divider className={classes.divider}/>

            <div className={classes.containerProfileInfo}>
                        
                <img 
                    className={classes.profileImg}
                    alt={'poster'} 
                    src={user.photoUrl ? user.photoUrl: backUpProfilePhoto}/>
            

                <b
                    className={classes.profileName}>
                    {user.displayName ? user.displayName : 'Not signed in'}
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
                                () => { console.log('Send Comment & Rating to Firestore') }
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