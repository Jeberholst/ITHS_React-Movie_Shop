import { fsDB as db } from '../../util/firebase'
import firebase from "firebase/app";
import { 
    actions as snackBarActions,  
} from "../../redux/features/snackbars";


class FirebaseReceipt {
    
    constructor (total, movies) {
        this.total = total;
        this.movies = movies;
    }

    toFirestore(data) {
        return {
            total: data.total,
            movies: data.movies,
        };
    }
}

export const sendReceipt = async(docRef, movie_count, movies) => {

    const userDocRef = db.collection("users").doc(`${docRef}`)

    return db.runTransaction((transaction) => {

        return transaction.get(userDocRef).then((sfDoc) => {
        

            if (!sfDoc.exists) {

            }
            const receipt = new FirebaseReceipt(calculatedCost(movie_count), movies)

            let newDocProps = {
                receipt: firebase.firestore.FieldValue.arrayUnion(receipt.toFirestore(receipt))
            }
   
            transaction.set(userDocRef, newDocProps);
                 
        });
    
    }).then(() => {
        //dispatch(snackBarActions.displaySnackBar(commentNotifications.commentAdded))
    }).catch((error) => {
        console.log("Transaction failed: ", error);
    });
    

}

function calculatedCost(count){
    
    try {
        const total = (count * 20.00)
        const noVat = (total * 0.8)
        const VAT = (total * 0.2)

        return createCost(noVat, VAT, total)
        
    } catch (error) {
        // console.log('Error', error)
    }
    return createCost('', '', '')
}

function createCost(noVat, VAT, total){
    return {
        noVat,
        VAT,
        total
    };
}

export const CommentFunction = { addComment: sendReceipt }