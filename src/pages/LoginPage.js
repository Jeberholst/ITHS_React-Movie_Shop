import {Button, ButtonGroup, Grid, Link, makeStyles, TextField, Typography} from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { emailTest, passwordTest, userFunctions } from "../util/Firebaser"
import firebaseUser from './../redux/features/firebaseUser'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        maxWidth: '350px',
        width: '90%', // Fix IE 11 issue.
        marginTop: theme.spacing(2),
        rowGap: '20px',
        justifyContent: "center",
        backgroundColor: 'grey',
        padding: '30px',
        },
    submit: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(5),

    },
    footer: {
        margin: 'auto'
    }
}));

const LoginPage = () => {
    const classes = useStyles();

    // {console.log(emailTest, passwordTest)}


    return(
        <div>
            <div>
                <Typography variant="h5" component="h2">
                    Logga in
                </Typography>
            </div>

            <div>
               <SignInCreateUser/>

            </div>

        </div>
    );

}


const SignInCreateUser = () => {
    const classes = useStyles();

    const cUser = useSelector(state => state.firebaseUser.user)

    if(cUser !== null){
        return(
            <div>
                <p>Signed in as: {cUser}</p>
                
                <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        data-testid="signin-anon"
                        onClick={() => {
                            userFunctions.signOut()
                            // signInWithEmailPassword()
                        }}
                    >
                        Sign out
                </Button>
            </div>
        );
    } else {
        return(
            <div>
        
                <ButtonGroup>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        data-testid="signin-anon"
                        onClick={() => {
                            userFunctions.signInUser(emailTest, passwordTest)
                            // signInWithEmailPassword()
                        }}
                    >
                        Sign In
                    </Button>


                </ButtonGroup>

                
            </div>
        )
    }
}

export default LoginPage