import {Button, createMuiTheme, CssBaseline, Grid, Link, makeStyles, TextField, Typography} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import firebase from "firebase/app";
import "firebase/auth";
import AuthService from "../util/auth-service"
import PageLableWithIcon from "./PageLabelWithIcon";
import {Lock} from "@material-ui/icons";
import { ThemeProvider } from "@material-ui/styles";


export const AuthContext = React.createContext()


const RegisterPage = () => {

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
            //backgroundColor: 'grey',
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

    const theme = createMuiTheme({
        palette: {
            type: "dark"
        }
    });


    const classes = useStyles();
    const [user, setUser]  = useState("")
    const [logEmail, setEmail]  = useState("")
    const [logPassword, setPassword]  = useState("")

    const createUser = () => {
        let email = logEmail;
        let password = logPassword;

        AuthService.register(email, password)


    }


    const signInWithEmailPassword = () => {
        let email = logEmail;
        let password = logPassword;

        AuthService.login(email, password)
    }



    return (
        <div className={classes.paper}>
            <AuthContext.Provider value={{user}}>
                <PageLableWithIcon {...{ text: 'Registrera konot', icon: <Lock/>}}/>


                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <div className={classes.form} noValidate>
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
                            onClick={createUser}
                        >
                          Skapa konto
                        </Button>

                    </div>
                </ThemeProvider>

            </AuthContext.Provider>


        </div>
    );


}

export default RegisterPage