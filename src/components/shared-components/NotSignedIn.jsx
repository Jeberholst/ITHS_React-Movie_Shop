import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    rootNotSignedIn: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 50,
        marginBottom: 15,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        "& > *": {
            marginBottom: 15,
        }
    }
}));

const NotSignedIn = ({ ...props }) => {
    
    const classes = useStyles();
    const history = useHistory();

    return(
        <React.Fragment>

            <div className={classes.rootNotSignedIn}>

                <div className={classes.container}>

                    <b>{props.message}</b>

                    <Button
                        style={{width: '30%'}}
                        variant={'contained'}
                        color={'secondary'}
                        onClick={
                            () => { history.push("/login") }
                        }>
                        Sign in

                        </Button>

                        
                </div>
                
                
            </div>
 

        </React.Fragment>
    )

}

export default NotSignedIn;