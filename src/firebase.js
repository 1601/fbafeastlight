const config = {
  apiKey: "AIzaSyDnahqAzecK3Cf5KrnbgGk9KVIKFp7nF9c",
  authDomain: "smtp-fbafeastlight-com.firebaseapp.com",
  databaseURL: "https://smtp-fbafeastlight-com.firebaseio.com",
  projectId: "smtp-fbafeastlight-com",
  storageBucket: "smtp-fbafeastlight-com.appspot.com",
  messagingSenderId: "56382606382",
  appId: "1:56382606382:web:a54675572aa2bf815363bf",
  measurementId: "G-2NBD06ZVK2"
}

let firebaseCache

export const getUiConfig = firebase => ({
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
})

const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache
  }

  firebase.initializeApp(config)
  firebaseCache = firebase
  return firebase
}

export default getFirebase
