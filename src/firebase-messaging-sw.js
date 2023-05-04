importScripts("https://www.gstatic.com/firebasejs/9.21.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.21.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDz8yux9EtMaSaJMFJ-Sz3pLoKr6LZ0uXM",
  authDomain: "funixproductions-api.firebaseapp.com",
  projectId: "funixproductions-api",
  storageBucket: "funixproductions-api.appspot.com",
  messagingSenderId: "589571042618",
  appId: "1:589571042618:web:f7f00920e4ae114ca4f403",
  measurementId: "G-L2C4TLYH7J"
});
const messaging = firebase.messaging();
