import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA8gLq7EW5n_8pmScjGFfmFVv4fjlKB_LU",
  authDomain: "hotel-81b76.firebaseapp.com",
  projectId: "hotel-81b76",
  storageBucket: "hotel-81b76.appspot.com",
  messagingSenderId: "940853113698",
  appId: "1:940853113698:web:cca87e8e4dc0a14632b23b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export const getRoomsFirebase = async () => {
//   const dbRooms = await getDocs(collection(db, "rooms"));

//  let roomsArr = []
//  dbRooms.forEach((doc) => {
//     roomsArr.push({...doc.data(), id: doc.id})
//     });
//     return roomsArr;
// };