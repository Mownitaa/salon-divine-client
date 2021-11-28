import initializeFirebase from '../Pages/Login/Firebase/Firebase.init';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";


initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }


    const logout = () => {
        signOut(auth).then(() => {
            //sign-out successful.
        }).catch((error) => {
            //An error happend.
        })
    }
    return {
        user,
        registerUser,
    }
}

export default useFirebase;