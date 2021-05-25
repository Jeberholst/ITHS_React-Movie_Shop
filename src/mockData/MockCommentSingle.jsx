
import React from 'react'
import { Divider, makeStyles } from '@material-ui/core';
import MockStarsComponent from './MockStarsComponent';
import MockUserProfile from './MockUserProfile';

const tempStrComment = "This is a comment made by someone"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        margin: 15,
        fontSize: 12,
        borderRadius: 10,
        background: 'rgb(0,0,0, 0.1)',
        flexWrap: 'column-reverse',
        "& *": {
            marginLeft: 5,
        },
        "&:hover": {
            background: 'rgb(255,255,255, 0.1)',
        }
    },
    containerTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 5,
        marginTop: 10,
    },
    divider: {
        marginTop: 10,
        marginBottom: 10,
        background: 'rgb(255,255,255, 0.1)',
    },
    containerComment: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
    },
}));
  

const MockCommentSingle = ({ item }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            
            <div className={classes.root}>

                <div className={classes.containerTop}>

                        <div className={classes.gridUser}>
                            <MockUserProfile/>
                        </div>

                        <div className={classes.gridRight}>
                            <MockStarsComponent/>
                        </div> 

                </div>

                <Divider className={classes.divider}/>

                <div className={classes.containerComment}>
                    <p style={{fontSize: 12}}>
                        {tempStrComment}
                    </p>
                </div>


            </div>

        </React.Fragment>
    );

}

export default MockCommentSingle