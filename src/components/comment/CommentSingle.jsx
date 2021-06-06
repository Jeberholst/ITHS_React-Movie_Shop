
import React from 'react'
import { Divider, makeStyles } from '@material-ui/core';
import StarsComponent from '../shared-components/StarsComponent';

const tempStrComment = "This is a comment made by someone"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        marginBottom: 15,
        fontSize: 12,
        borderRadius: 10,
        // background: 'rgb(32,32,32, 0.5)',
        flexWrap: 'column-reverse',
        // "&:hover": {
        //     background: 'rgb(255,255,255, 0.5)',
        // }
    },
    containerTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 5,
        marginTop: 10,
    },
    profileImg: {
        width: '50px',
        height: '50px',
        borderRadius: 25,
        objectFit: 'cover',
    },
    profileName: {
        fontSize: 14, 
        height: '100%',
        marginLeft: 15,
    },
    starsRating: {
        height: '100%',
        marginLeft: 25,
    },
    containerComment: {
        padding: 15,
        textAlign: 'left',
    },
    containerProfileInfo: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        textAlign: 'left',
        alignContent: 'center',
        alignItems: 'center',
    },
}));
  

const CommentSingle = ({...props}) => {
    const classes = useStyles();

    const item = props.item

    return (
        <React.Fragment>
            
            <div className={classes.root}>

                <div className={classes.containerTop}>

                    <div className={classes.containerProfileInfo}>

                            <UserProfileMini userName={item.displayName} userPhotoUrl={item.photoUrl} rating={item.rating}/>
                    
                    </div>

                </div>

                <div className={classes.containerComment}>

                    <p style={{fontSize: 12}}>
                        {item.comment} 
                    </p>

                </div>


            </div>

        </React.Fragment>
    );

}

const UserProfileMini = ({ userName, userPhotoUrl, rating }) => {
    
    const classes = useStyles();
    const backUpProfilePhoto = 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/142819271/original/09dafa4104fa6aeca4e62f33326be4933ae7ccac/create-cartoon-profile-picture-abd7.jpg'

    return (
        <React.Fragment>

                <img className={classes.profileImg}
                    alt={'poster'} 
                    src={userPhotoUrl ? backUpProfilePhoto: backUpProfilePhoto}/>
            
                <div>
                    <b className={classes.profileName}>
                        {userName ? userName: 'Unknown'}
                    </b>
                    <div className={classes.starsRating}>
                        <i>Rated {rating} out of 5</i>
                    </div> 
                </div>
               
         
        </React.Fragment>
    );

}

export default CommentSingle;