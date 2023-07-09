// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDIs6SdTAjvZ0WtKfmAIloksNhOtiFJ3w4",
//   authDomain: "joetsu-7264e.firebaseapp.com",
//   projectId: "joetsu-7264e",
//   storageBucket: "joetsu-7264e.appspot.com",
//   messagingSenderId: "241016132716",
//   appId: "1:241016132716:web:cb517124a697b4a768b449",
// };
const firebaseConfig = {
  apiKey: "AIzaSyBp5OW-uEwvh8Q7d14JbRdMmqASxj994EA",
  authDomain: "jouetsu-mock.firebaseapp.com",
  projectId: "jouetsu-mock",
  storageBucket: "jouetsu-mock.appspot.com",
  messagingSenderId: "651694905604",
  appId: "1:651694905604:web:ebb213c40be231dc909851",
  measurementId: "G-GFN9X1C848",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const firebaseSignIn = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const credential = GoogleAuthProvider.credentialFromResult(result);
};

export const firebaseSignOut = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};
