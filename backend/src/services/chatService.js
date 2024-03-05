import firebase from "../../firebase.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  where,
  query,
} from "firebase/firestore";

const db = getFirestore(firebase);

export const getChatByUsers = async (user1, user2) => {
  try {
    console.log(user1);
    console.log(user2);
    const q = query(
      collection(db, "chatRooms"),
      where("user1", "==", user1),
      where("user2", "==", user2)
    );
    const querySnapshot = await getDocs(q);
    let user = null;
    querySnapshot.forEach((doc) => {
      user = doc.data();
    });    
    return user;
  } catch (error) {
    console.error("Error getting chat by users:", error);
    throw error;
  }
};
