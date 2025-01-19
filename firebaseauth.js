import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAt3QIvRujwxR8mWk1pDviqrNi5w4s-EX4",
  authDomain: "akfitness-a30d6.firebaseapp.com",
  projectId: "akfitness-a30d6",
  storageBucket: "akfitness-a30d6.firebasestorage.app",
  messagingSenderId: "167291593261",
  appId: "1:167291593261:web:068426d4110ecafdb74ea4"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn")
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../index2.html";
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

    });
})

const googleSignup = document.getElementById("google-signup-btn");
googleSignup.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Sign Up successful:", user);
      window.location.href = "../index2.html"; 
    })
    .catch((error) => {
      console.error("Error during sign up:", error.message);
    });
});

//normal sign in

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault()

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Logging in")
      window.location.href = "../index2.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
})