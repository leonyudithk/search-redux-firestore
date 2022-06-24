import {initializeApp} from 'firebase/app'
import {GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDR2UB08w0u2wTtNHv8tvEPX9gAl41CClI",
  authDomain: "plantasf11.firebaseapp.com",
  projectId: "plantasf11",
  storageBucket: "plantasf11.appspot.com",
  messagingSenderId: "847384107485",
  appId: "1:847384107485:web:a819544d005bacce74fe34"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider()
export const DB = getFirestore()

export default app