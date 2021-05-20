import { Container, makeStyles } from '@material-ui/core';
import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'left',
        alignContent: 'left',
        alignItems: 'center',
        padding: 0,
    },
}));


const MockUserProfile = () => {
    const classes = useStyles();
    
    return (
        <React.Fragment>

            <Container className={classes.root}>

                <AccountCircleIcon style={{fontSize: 32}}></AccountCircleIcon>

                <p style={{fontSize: 14, margin: 5}}>
                   Username
                </p>

            </Container>
         
        </React.Fragment>
    );

}
export default MockUserProfile