
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyANInCERWOAxTEyW355qwEXO487TRI7G84",
    authDomain: "sillysaaga.firebaseapp.com",
    projectId: "sillysaaga",
    storageBucket: "sillysaaga.appspot.com",
    messagingSenderId: "746216439310",
    appId: "1:746216439310:web:5971011589bad48fba065f",
    measurementId: "G-Q44DQ5CZJD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
