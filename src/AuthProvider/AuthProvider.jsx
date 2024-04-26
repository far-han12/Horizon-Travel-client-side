import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AiFillAccountBook } from "react-icons/ai";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

export const AuthContext =createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const githubprovider = new GithubAuthProvider();



const AuthProvider = ({children}) => {
const githubLogin=()=>{
    setLoading(true)
   return signInWithPopup(auth,githubprovider)

}
const googleLogin =()=>{
    return signInWithPopup(auth ,provider)
}
const logout =()=>{
    setLoading(true)
    return signOut(auth)
}
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser =(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
    const loginuser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const [user,setUser] = useState(null)
    const [loading ,setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth,currentuser =>{
            console.log("user in the auth state change",currentuser);
            setUser(currentuser)
            setLoading(false)
           }) 
           return () =>{
            unsubscribe()
           }
    })
const authInfo ={setUser,createUser,user,logout,loginuser,googleLogin,githubLogin,updateUser,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;