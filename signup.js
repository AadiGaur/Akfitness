import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAt3QIvRujwxR8mWk1pDviqrNi5w4s-EX4",
  authDomain: "akfitness-a30d6.firebaseapp.com",
  projectId: "akfitness-a30d6",
  storageBucket: "akfitness-a30d6.firebasestorage.app",
  messagingSenderId: "167291593261",
  appId: "1:167291593261:web:068426d4110ecafdb74ea4"
};

// google sign in
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const submit = document.getElementById("submit2");
submit.addEventListener("click", function (event) {
  event.preventDefault()

  const email = document.getElementById('email2').value;
  const password = document.getElementById('password2').value;
  const confirm = document.getElementById("Confirm2").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Creating Account")
      window.location.href = "../index2.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
})