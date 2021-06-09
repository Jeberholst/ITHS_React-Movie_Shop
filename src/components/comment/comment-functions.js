import { fsDB as db } from './../../util/firebase'
import firebase from "firebase/app";
import { 
    actions as snackBarActions,  
    commentNotifications
} from "../../redux/features/snackbars";


class FirebaseUserWithCommentAndRating {
    
    constructor (displayName, photoUrl, uid, comment, rating) {
        this.displayName = displayName;
        this.photoUrl = photoUrl;
        this.uid = uid;
        this.comment = comment;
        this.rating = rating;
    }

    toString() {
        return this.displayName + ', ' + this.photoUrl + ', ' + this.uid;
    }

    toFirestore(data) {
        return {
            displayName: data.displayName,
            photoUrl: data.photoUrl,
            uid: data.uid,
            comment: data.comment,
            rating: data.rating,
        };
    }
}

export const addComment = async(docRef, comment, rating, currentUser, dispatch) => {

    const movieRef = db.collection("movies").doc(`${docRef}`)

    return db.runTransaction((transaction) => {

        return transaction.get(movieRef).then((sfDoc) => {
            
            var newTotalRating = parseInt(rating)
            var newVoteCount = 1

            if (!sfDoc.exists) {

            }

            newTotalRating = (sfDoc.data() !== undefined) ? (sfDoc.data().totalRating + 3 ): 0
            newVoteCount = (sfDoc.data() !== undefined) ? (sfDoc.data().voteCount + 1 ): 1

            var newAverageRating = newTotalRating / newVoteCount
            
            const user = new FirebaseUserWithCommentAndRating(currentUser.displayName, currentUser.photoURL, currentUser.uid, `${comment}`, parseInt(rating))

            let newDocProps = {
                averageRating: newAverageRating,
                totalRating: newTotalRating,
                voteCount: newVoteCount,
                comments: firebase.firestore.FieldValue.arrayUnion(user.toFirestore(user))
            }
   
            transaction.set(movieRef, newDocProps);
                 
        });
    
    }).then(() => {
        dispatch(snackBarActions.displaySnackBar(commentNotifications.commentAdded))
    }).catch((error) => {
        console.log("Transaction failed: ", error);
    });
    

}



export const CommentFunction = { addComment }