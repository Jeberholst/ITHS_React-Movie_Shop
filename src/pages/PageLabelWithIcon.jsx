import React from "react";
import { Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '3%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        margin: '2%',
        fontWeight: 'bold'
    },
    containerText: {
        textAlign: 'center'
    }, 
    divider: {
        marginTop: 15,
        width: '95%',
        background: "rgb(255,255,255, 0.1)"
    }
}))

const PageLableWithIcon = ({...props}) => {
    
    const classes = useStyles();

    return(
        <div className={classes.root}>

            <div className={classes.iconContainer}>
                {props.icon}
            </div>

            <div className={classes.containerText}>
                {props.text}
            </div>

            <Divider className={classes.divider}/>

        </div>


    );

}

export default PageLableWithIcon;