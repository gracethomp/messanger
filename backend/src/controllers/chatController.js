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
import { createChatSchema } from '../middlewares/chatValidation.middleware.js';

const db = getFirestore(firebase);

export const createChat = async (req, res, next) => {
  try {
    await createChatSchema.validate(req.body, {abortEarly: false});
    const data = req.body;
    await addDoc(collection(db, "chatRooms"), data);
    res.status(200).send("chat created successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
