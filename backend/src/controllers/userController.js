import firebase from "../../firebase.js";
import User from "../models/userModel.js";
import * as argon2 from 'argon2';

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const db = getFirestore(firebase);

export const createUser = async (req, res, next) => {
  try {
    const passwordHashed = await argon2.hash(req.body.password);
    const data = {...req.body, password: passwordHashed};
    const userRecord = await addDoc(collection(db, 'users'), data);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};