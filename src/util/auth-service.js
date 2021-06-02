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
                // let errorCode = error.code;
                // let errorMessage = error.message;
                console.log(error)
            });
    }

    logout() {
        localStorage.removeItem("user");
        firebase.auth().signOut().then( r =>  console.log("Signed out"))
    }

    register(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                console.log("created")
                let user = userCredential.user;
                localStorage.setItem("user", JSON.stringify(user));
                window.location = 'profile'

                // ...
            })
            .catch((error) => {
                // let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }

    updateUserProfile(displayName) {
        let user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: displayName,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function() {
            // Update successful.
        }).catch(function(error) {
            // An error happened.
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    deleteUser() {
        let user = firebase.auth().currentUser;

        user.delete().then(function() {
            // User deleted.
            console.log("User deleted")
            localStorage.removeItem("user");
        }).catch(function(error) {
            // An error happened.
        });    }




}

export default new AuthService();