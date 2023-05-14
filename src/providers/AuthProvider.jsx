import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react'
import app from './../firebase/firebase.config';
import  { useState } from 'react';
import  { useEffect } from 'react';

export const AuthContext = createContext() 
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("Current User", currentUser);
            setLoading(false)


            if(currentUser && currentUser.email){

             const loggedUser = {
                email: currentUser.email
            }
                 
            fetch('https://car-doctor-server-bice.vercel.app/jwt', {
              method: "POST",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(loggedUser)
            })
            .then(res => res.json())
            .then(data => {
              console.log("jwt response",data);
              // warning localstorage is not the best place to store the jwt access token(second best)
              localStorage.setItem('car-access-token', data.token)
             
            })

            }
            else{
                localStorage.removeItem('car-access-token')
            }


        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;