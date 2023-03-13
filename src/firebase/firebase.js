import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { setDoc,doc, collection, updateDoc, getDocs } from "firebase/firestore";


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

export const auth = getAuth(app);

export default app;


//Для получения данных
export const getRoomsFirebase = async () => {
  const dbRooms = await getDocs(collection(db, "rooms"));

 let roomsArr = []
 dbRooms.forEach((doc) => {
    roomsArr.push({...doc.data(), id: doc.id})
    });
    return roomsArr;
};

//Для изменения данных
export const updateRoomFirestore = async (id, data) => {
  try {
    const roomRef = 
     doc(db, "rooms",id);
    await updateDoc(roomRef,data);
    console.log('Data updated successfully!');
  } catch (error) {
    console.error('Error updating data: ', error);
    throw error; // выбрасываем ошибку, чтобы обработать её в Redux Saga
  }
};


//Для добавления данных
// export const addRoomFirestore = async (data) => {
//   try {
//     const roomRef = await addDoc(collection(db, "rooms"), data);
//     console.log('Data has been successfully added with ID: ', roomRef.id);
//     // выполнение других действий после успешного добавления данных
//     // ...
//   } catch (error) {
//     console.error('Failed to add data:', error);
//     // использование своих собственных сообщений об ошибках или дополнительной обработки ошибки
//     // ...
//     throw error;
//   }
// };

