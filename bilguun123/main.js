import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
// import { getAnalytics } from "firebase/analytics";

import {
    getDatabase,
    get,
    ref,
    push,
    child,
    onChildChanged,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMzmmyR3rWERL1Exqi3sqi34vXZnPCBxE",
  authDomain: "bilguun123-691af.firebaseapp.com",
  projectId: "bilguun123-691af",
  storageBucket: "bilguun123-691af.appspot.com",
  messagingSenderId: "378351662769",
  appId: "1:378351662769:web:2b0616dac835e95f5e9490",
  measurementId: "G-SQHBVS8PWZ"
};

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);
// const users = []

let id = 1;

console.log("Setup start.");
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);
console.log("Setup finish.");
const users = [];
const nameEl = document.getElementById("name");
function drawUsers() {
  const usEl = document.getElementById("user");
  let userList = "";
  users.forEach((user) => {
    userList += `
            <p class="chatStyle">${user.name}</p>
        `;
  });
  usEl.innerHTML = userList;
}

onChildChanged(ref(db, "users/"), (snapshot) => {
  if (snapshot.exists()) {
    console.log("Child changed.", snapshot.val());
    const changedUser = snapshot.val();
    const findIndex = users.findIndex((user) => user.id === changedUser.id);
    console.log(findIndex);
    users[findIndex] = changedUser;
    drawUsers();
  }
});

function saveUser(name, id, color = "black") {
  push(child(dbRef, "users/"), {
    id: id,
    color: color,
    name: name,
  })
    .then(() => {
      // alert("");
    })
    .catch((err) => {
      console.log("Push-Err", err);
    });
}

function getusers() {
  get(child(dbRef, "users/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((doc) => {
          console.log("data received");
          users.push(doc.val());
        });
        drawUsers();
      }
    })
    .catch((err) => console.log("DB-ERR", err));
  console.log("DB", db);
}

const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", () => {
  const name = nameEl.value;
  id++;
  saveUser(name, users.length);
});

getusers();