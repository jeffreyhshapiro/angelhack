import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyABIsViypWT_FN-acea5GnhI9LJqVGsWtY",
  authDomain: "connecting-jlp.firebaseapp.com",
  databaseURL: "https://connecting-jlp.firebaseio.com",
  projectId: "connecting-jlp",
  storageBucket: "connecting-jlp.appspot.com",
  messagingSenderId: "359807406215"
};
firebase.initializeApp(config);
const auth = firebase.auth;
export  {
 auth
};
