import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

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

    create(user) {
        const db = firebase.firestore()

        //console.log(user.userId)

        db.collection("users").doc(user?.userId).set({
            email: user?.email,
            userId: user?.userId,
            firstname: "",
            lastname: "",
            address: "",
            postalCode:"",
            county:"",
            country:""
        })

            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });


    }

    updateUser(user){
        const db = firebase.firestore()

        let userRef = db.collection("users").doc(user.userId);

        if (user.firstname){
            return userRef.update({
                firstname: user.firstname
            })    .then(() => {
                console.log("Document successfully updated!");
            })
                .catch((error) => {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
        }

        if (user.address){
            return userRef.update({
                address: user.address
            })    .then(() => {
                console.log("Document successfully updated!");
            })
                .catch((error) => {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
        }

        if (user.lastname){
            return userRef.update({
                lastname: user.lastname
            })    .then(() => {
                console.log("Document successfully updated!");
            })
                .catch((error) => {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
        }





    }

    register(email, password, user) {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                console.log("created")
                 user = userCredential.user;
                localStorage.setItem("user", JSON.stringify(user));
                console.log(user)

                user = {
                    email: user.email,
                    userId: user.uid
                }
                this.create(user)
               // window.location = 'profile'

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

    getUserFromFirebase = (user) => {
        const db = firebase.firestore()

        let docRef = db.collection("users").doc(user?.uid);

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                localStorage.setItem("userFirebase", JSON.stringify(doc.data()));

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
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