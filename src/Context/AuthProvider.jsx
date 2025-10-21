import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileUser = (displayName) => {
    return updateProfile(auth.currentUser, {
      displayName,
    });
  };

  //verification email
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };
  //login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //signOut

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //forget password
  const forgerPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      if (currUser && currUser.emailVerified) {
        setUser(currUser);
      } else {
        setUser(null);
      }

      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authValue = {
    user,
    loading,
    setUser,
    createUser,
    verifyEmail,
    setLoading,
    signOutUser,
    updateProfileUser,
    loginUser,
    forgerPassword,
    googleSignIn,
  };

  return <AuthContext value={authValue}>{children}</AuthContext>;
};

export default AuthProvider;
