import { auth } from "../config/firebaseconfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const signIn = async(email, senha) =>{
  try{
    await signInWithEmailAndPassword(auth, email, senha)
    

  }catch(error) {
    alert(error)
  }
}