import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail  } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

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

const reset = document.getElementById("reset");
reset.addEventListener("click", function(event){
    event.preventDefault()

    const email = document.getElementById("email").value;

    sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("email sent")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
})