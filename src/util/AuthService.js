import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";

class AuthService {

    login(email, password) {

        firebase.auth().signInWithEmailAndPassword(email, password).then()
            .then((userCredential) => {
            let user = userCredential.user;
                localStorage.setItem("user", JSON.stringify(user));
                console.log(user)
                // ...
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(error)
            });
    }

    logout() {
        localStorage.removeItem("user");
        firebase.auth().signOut()
    }

    register(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                console.log("created")
                // ...
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }




}

export default new AuthService();