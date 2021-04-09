import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore= firebase.firestore();

//sign in with google
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters=({prompt:'select_account'});
export const singInWithGoogle = () =>(auth.signInWithPopup(googleProvider))
export const handleUserProfile = async(userAuth,additiondata)=>{
    if(!userAuth)return;
    const {uid} =userAuth;
    const userRef = firestore.doc(`users/${uid}`)
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        const {dispalyName,email}=userAuth;
        const timestamp = new Date();
        try{
            await userRef.set({
                dispalyName,
                email,
                creatDate : timestamp,
                ...additiondata
            })

        }catch(err){
            console.log(err)
        }
    }
    return userRef;
}
export default singInWithGoogle;

//sign in with facebook