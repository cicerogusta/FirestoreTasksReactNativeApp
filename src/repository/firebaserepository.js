import { auth } from "../config/firebaseconfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const signIn = async(email, senha) =>{
  try{
    await signInWithEmailAndPassword(auth, email, senha)
    

  }catch(error) {
    alert(error)
  }
}

export const checkLoggedUser = async() =>{
  try{
    return auth.currentUser!== null
    

  }catch(error) {
    alert(error)
  }
}