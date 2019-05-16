var firebaseConfig = {
    apiKey: "AIzaSyDdcw8ogjir_rm3G-tsCHiYoLU-gcIJm-I",
    authDomain: "trabalho-cordova.firebaseapp.com",
    databaseURL: "https://trabalho-cordova.firebaseio.com",
    projectId: "trabalho-cordova",
    storageBucket: "trabalho-cordova.appspot.com",
    messagingSenderId: "930624767127",
    appId: "1:930624767127:web:4d36da0cbde80813"
  };
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app()
}


