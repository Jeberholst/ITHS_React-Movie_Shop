import "firebase/auth";
import "firebase/firestore";
import "firebase/auth";
import firebase from 'firebase/app';
import { actions } from './../redux/features/firebaseUser'

const firebaseConfig = {
    apiKey: "AIzaSyBHdsXLFx1Z4XAzI8HhsAcYwVJcQ5E5PXo",
    authDomain: "iths-react-movie-shop.firebaseapp.com",
    projectId: "iths-react-movie-shop",
    storageBucket: "iths-react-movie-shop.appspot.com",
    messagingSenderId: "284458605047",
    appId: "1:284458605047:web:6d0a86a0d45156970d76f2",
    measurementId: "G-RHBQ6NZN13"
};

var authStateListener = null
var currentUser = null

var emailTest = "jeberholst@gmail.com"
var passwordTest = "123456a"

export default function Firebaser(){
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
    firebase.auth();
   
}

function initializeAuthListener(dispatch){

    if(authStateListener === null){
        
       authStateListener = firebase.auth().onAuthStateChanged(function(user) {
            console.log('auth-changed')
            if (user) {
                console.log('User signed in: ', JSON.stringify(user))
                dispatch(actions.userSignedIn(JSON.stringify(user)))
            }
            else {
                console.log('No user signed in: ', JSON.stringify(user))
                dispatch(actions.noUserSignedIn(null))
            }
        });
        console.log('Adding auth state listener')
    }
    
}

function signInUser(email, password) {

    console.log('Sign in user with: ' + email, password)

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log('User signed in: ', user)
           
        })
        .catch((error) => {
            console.log('Error signing in user', error)
        });
}

function signOut() {

    console.log('Signing out current user')
    firebase.auth().signOut();
    currentUser = null
}

export const userFunctions = { signInUser, signOut }

export {
    emailTest, 
    passwordTest,
    currentUser, 
    initializeAuthListener
}


