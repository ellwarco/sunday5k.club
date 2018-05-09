import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyCAZeSSk0Pawy3ib14fwD0lZPcadsyCYFU",
  authDomain: "sunday5k-2d236.firebaseapp.com",
  databaseURL: "https://sunday5k-2d236.firebaseio.com",
  projectId: "sunday5k-2d236",
  storageBucket: "sunday5k-2d236.appspot.com",
  messagingSenderId: "834026452801",
};

const devConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: YOUR_AUTH_DOMAIN,
  databaseURL: YOUR_DATABASE_URL,
  projectId: YOUR_PROJECT_ID,
  storageBucket: '',
  messagingSenderId: YOUR_MESSAGING_SENDER_ID,
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth
};
