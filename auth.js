import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB2X8qa4k0ac5Y6Iz1edItdRAozHO7SK4M",
  authDomain: "bistro-bliss-87ad8.firebaseapp.com",
  projectId: "bistro-bliss-87ad8",
  storageBucket: "bistro-bliss-87ad8.firebasestorage.app",
  messagingSenderId: "687928281801",
  appId: "1:687928281801:web:fde1b4f9c0cea33a5f1b18",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const booktable = document.querySelector("#booktable");
const contact = document.querySelector("#sends");

if (booktable) {
  booktable.addEventListener("click", async () => {
    const name = document.getElementById("names").value;
    const phone = document.getElementById("phoneno").value;
    const date = document.getElementById("dates").value;
    const time = document.getElementById("times").value;
    const persons = document.getElementById("persons").value;

    if (!name || !phone || !date || !time || !persons) {
      alert("Please fill in all fields.");
      return;
    }

    const data = { name, phone, date, time, persons };

    try {
      const docRef = await addDoc(collection(db, "bookings"), data);
      alert("Booking successful! ID: " + docRef.id);
      window.location.reload();
    } catch (err) {
      console.error("Error saving booking:", err);
      alert("Booking failed.");
    }
  });
}

if (contact) {
  sends.addEventListener("click", async () => {
    const name = document.getElementById("identity").value;
    const email = document.getElementById("cont").value;
    const subject = document.getElementById("subs").value;
    const message = document.getElementById("mess").value;

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields");
      return;
    }

    const userdata = { name, email, subject, message };

    try {
      const docRef = await addDoc(collection(db, "comments"), userdata);
      alert("Message successfully submitted! ID: " + docRef.id);
      window.location.reload();
    } catch (err) {
      console.log("error submitting message", err);
      alert("submission failed");
    }
  });
}
