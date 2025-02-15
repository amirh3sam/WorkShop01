import { initializeApp } from 'firebase/app';

import { getDatabase, ref, push, onValue, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCzmV3MTGzopLGgehC5LP4oSbpuTr_VfyQ",
  authDomain: "workshop-38d39.firebaseapp.com",
  databaseURL: "https://workshop-38d39-default-rtdb.firebaseio.com",
  projectId: "workshop-38d39",
  storageBucket: "workshop-38d39.appspot.com",
  messagingSenderId: "914740664427",
  appId: "1:914740664427:web:cfd41d2ccc21b3e329f92e",
  measurementId: "G-0KML5V31EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push, onValue, remove };


