import * as firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyCb8lpChwkbmgqdUFajWuuyZ-SeuqFeJdk",
    authDomain: "maxwell-mhtolu.firebaseapp.com",
    databaseURL: "https://maxwell-mhtolu.firebaseio.com",
    projectId: "maxwell-mhtolu",
    storageBucket: "maxwell-mhtolu.appspot.com",
    messagingSenderId: "810866037896",
    appId: "1:810866037896:web:b52da1eaa744a808"
 };
 let database = firebase.initializeApp(firebaseConfig);
 export default database ;
 