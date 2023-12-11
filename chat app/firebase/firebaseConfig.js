import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, get, set, update, ref, child, remove, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCtm2TkH2HS6Ew2zTIz1z3P_6ZcARo3esg",
  authDomain: "ebay-clone-f87fa.firebaseapp.com",
  databaseURL: "https://ebay-clone-f87fa-default-rtdb.firebaseio.com",
  projectId: "ebay-clone-f87fa",
  storageBucket: "ebay-clone-f87fa.appspot.com",
  messagingSenderId: "284754142411",
  appId: "1:284754142411:web:b79b543150d540efeb674e",
  measurementId: "G-YL35KRKR9D",
};

const app = initializeApp(firebaseConfig);
var db = getDatabase(app);

export {
    db,
    get, 
    set, 
    update, 
    ref, 
    child, 
    remove, 
    push,
    onChildAdded
};
