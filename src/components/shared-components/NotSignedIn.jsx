import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    rootNotSignedIn: {
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
        marginTop: 15,
        marginBottom: 15
    }
}));

const NotSignedIn = ({ ...props }) => {
    
    const classes = useStyles();

    return(
        <React.Fragment>

            <div className={classes.rootNotSignedIn}>
               
                <b>{props.message}</b>

                <Button
                    style={{width: '30%'}}
                    variant={'contained'}
                    color={'secondary'}
                    onClick={
                        () => { 
                            alert('Move to sign-in... popup?')
                        }
                    }>
                    Sign in
                    </Button>
            </div>
 

        </React.Fragment>
    )

}

export default NotSignedIn;