import firebase from 'firebase'

 // Initialize Firebase
const config = {
   apiKey: "AIzaSyDkOtv6fEFj-2dFXo0wFljBVVNeL_fmBDE",
   authDomain: "chatroom-57cbe.firebaseapp.com",
   databaseURL: "https://chatroom-57cbe.firebaseio.com",
   projectId: "chatroom-57cbe",
   storageBucket: "chatroom-57cbe.appspot.com",
   messagingSenderId: "474723822467"
};

firebase.initializeApp(config);

export default firebase