import firebase from "../../firebase.js";
import User from "../models/userModel.js";
import * as argon2 from "argon2";

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
import { createUserSchema } from "../middlewares/validation.middleware.js";

const db = getFirestore(firebase);

export const createUser = async (req, res, next) => {
  try {
    await createUserSchema.validate(req.body, { abortEarly: false });
    const passwordHashed = await argon2.hash(req.body.password);
    const data = { ...req.body, password: passwordHashed };
    await addDoc(collection(db, "users"), data);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

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
