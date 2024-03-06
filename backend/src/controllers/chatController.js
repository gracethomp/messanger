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
import { createChatSchema } from "../middlewares/chatValidation.middleware.js";

const db = getFirestore(firebase);

export const createChat = async (req, res) => {
  try {
    await createChatSchema.validate(req.body, { abortEarly: false });
    const body = { ...req.body, user1: req.user1 };
    const data = body;
    await addDoc(collection(db, "chatRooms"), data);
    res.status(200).send("chat created successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getChatsByUser = async (req, res) => {
  try {
    const email = req.user1;
    const chatsRef = collection(db, "chatRooms");
    const chatsSnapshot = await getDocs(
      query(chatsRef, where("user1", "==", email))
    );

    const chatsSnapshot2 = await getDocs(
      query(chatsRef, where("user2", "==", email))
    );

    const chats = [];
    chatsSnapshot.forEach((doc) => {
      chats.push({ ...doc.data(), id: doc.id });
    });

    chatsSnapshot2.forEach((doc) => {
      chats.push({ ...doc.data(), id: doc.id });
    });

    res.status(200).send(chats);
  } catch (error) {
    console.error("Error getting chats:", error);
    throw error;
  }
};
