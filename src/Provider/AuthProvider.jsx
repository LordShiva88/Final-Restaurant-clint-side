import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

  const [loading, setLoading] = useState(true)
  const [user, setUser]= useState(null)

  const googleProvider = new GoogleAuthProvider()
  const googleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const createUser = (auth, email, password )=>{
    setLoading(true)
    return createUserWithEmailAndPassword(email, password, auth)
  }
  const loginUser = (auth, email, password )=>{
    setLoading(true)
    return signInWithEmailAndPassword(email, password, auth)
  }
  const signUp = (auth)=>{
    return signOut(auth)
  }

  useEffect(()=>{
    const unSubscribe = ()=>{
      onAuthStateChanged(auth, (user)=>{
        setUser(user)
      })
    }
    return () => unSubscribe()
  },[])

  console.log(user)

  const authInfo = {
    createUser, 
    loading,
    loginUser,
    signUp,
    googleLogin, 
    user
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;