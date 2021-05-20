import {Button, Grid, Link, makeStyles, TextField, Typography} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import firebase from "firebase/app";
import "firebase/auth";
import AuthService from "../util/auth-service"

export const AuthContext = React.createContext()


const LoginPage = () => {

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

    const classes = useStyles();
    const [user, setUser]  = useState("")
   const [logEmail, setEmail]  = useState("")
    const [logPassword, setPassword]  = useState("")

    const createUser = () => {
        let email = "test@test.test2";
        let password = "testtest2";

        AuthService.register(email, password)

    }

    useEffect(() => {
        console.log(user)
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                let uid = user.uid;
                setUser(user)
                console.log("user", user)
            } else {
                console.log("no user is signed in", user)
                setUser("Det konto finns inte")
                // User is signed out
            }
        });
    }, [])

    const signInWithEmailPassword = () => {
        // let email = "test@test.test2";
        // let password = "testtest2";

        let email = logEmail;
     let password = logPassword;

        AuthService.login(email, password)
    }

    const signOut = () => {
        setUser("")
        AuthService.logout()
        console.log(user)
    }

    return (
        <div className={classes.paper}>
            <AuthContext.Provider value={{user}}>
                <Typography variant="h5" component="h2">
                    Logga in
                </Typography>

                <div className={classes.form} noValidate>
                    USER:   {user.email ? user.email : user}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(v) => setEmail(v.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Lösenord"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(v) => setPassword(v.target.value)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        data-testid="signin-anon"
                        onClick={() =>  user.email ? signOut() :  signInWithEmailPassword()}
                    >
                        {user.email ? "Log out" : "Log in"}
                    </Button>

                    <Grid container>
                        <Grid item className={classes.footer}
                        >
                            <Link href="#" variant="body2">
                                {"Inget konto? Skapa ett här"}
                            </Link>
                        </Grid>
                    </Grid>
                </div>

            </AuthContext.Provider>


        </div>
    );


}

export default LoginPage