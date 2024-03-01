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

export const getUserByEmail = async (email) => {
  try {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    let user = null;
    querySnapshot.forEach((doc) => {
      user = doc.data();
    });
    return user;
  } catch (error) {
    console.error("Error getting user by email:", error);
    throw error;
  }
};
