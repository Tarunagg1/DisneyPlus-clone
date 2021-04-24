import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDA5R_jJJ5NfitXG5eakUD-TMu0pqygMvY",
    authDomain: "disneyplus-clone-1edfb.firebaseapp.com",
    projectId: "disneyplus-clone-1edfb",
    storageBucket: "disneyplus-clone-1edfb.appspot.com",
    messagingSenderId: "479222059156",
    appId: "1:479222059156:web:79d8d3d68f292065206481"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();



export { auth, provider, storage };
export default db;
