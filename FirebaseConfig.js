import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBD_V_yde2QGiPJJ1rCek2MEeNcz4EPkKg",
  authDomain: "multi-login-78dbc.firebaseapp.com",
  projectId: "multi-login-78dbc",
  storageBucket: "multi-login-78dbc.appspot.com",
  messagingSenderId: "981920727597",
  appId: "1:981920727597:web:09a876d9c540ff35f4aea4",
  measurementId: "G-D6WNQBX536",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);

export { auth, provider, signInWithGoogle };
