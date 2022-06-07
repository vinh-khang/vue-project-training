// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsPC8VFLM1HRiyK67weQV3TjgzDzxAl20",
    authDomain: "vuetify-training-3fa06.firebaseapp.com",
    projectId: "vuetify-training-3fa06",
    storageBucket: "vuetify-training-3fa06.appspot.com",
    messagingSenderId: "800345922023",
    appId: "1:800345922023:web:a11a9aa724bab9fc144542",
    measurementId: "G-SJ446P2CH7"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
export default db;



