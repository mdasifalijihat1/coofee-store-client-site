// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMqcDX-zJOwmDeeJ1oixMbxQzsIVbXye0",
  authDomain: "offee-store.firebaseapp.com",
  projectId: "offee-store",
  storageBucket: "offee-store.firebasestorage.app",
  messagingSenderId: "1078278863629",
  appId: "1:1078278863629:web:b06052567f836611e78e44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);