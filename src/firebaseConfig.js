import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import * as auth from 'firebase/auth';
import * as database from 'firebase/database';
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDmQDDgAN_jFn_VPUKpHpr1g01b5s_Dh4E',
  authDomain: 'geogather-kosciuszkon.firebaseapp.com',
  projectId: 'geogather-kosciuszkon',
  storageBucket: 'geogather-kosciuszkon.appspot.com',
  messagingSenderId: '131987645086',
  appId: '1:131987645086:web:a84b45b8b92fcc5292918f',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export { auth, database };
