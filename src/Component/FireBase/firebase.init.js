// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6pwnglpommAIvMvOrfvHzJ6rCLMVjjm0",
  authDomain: "email-password-login-4ada9.firebaseapp.com",
  projectId: "email-password-login-4ada9",
  storageBucket: "email-password-login-4ada9.firebasestorage.app",
  messagingSenderId: "110348082862",
  appId: "1:110348082862:web:8cf84dc4c56798b028173f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);