import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const app = {
  apiKey: "AIzaSyAiOtBCmW8N5ZAszkpfcZFqLYmvlIXBgwA",
  authDomain: "samal-agro.firebaseapp.com",
  projectId: "samal-agro",
  storageBucket: "samal-agro.appspot.com",
  messagingSenderId: "907262257812",
  appId: "1:907262257812:web:f14eff803d5074508e2281",
  measurementId: "G-DX772N6CWF",
};

firebase.initializeApp(app);
export const db = firebase.firestore();