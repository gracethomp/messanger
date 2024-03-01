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
import { createUserSchema, loginSchema } from "../middlewares/validation.middleware.js";
import { getUserByEmail } from '../services/userService.js';

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

export const login = async (req, res, next) => {
  try {
    await loginSchema.validate(req.body, {abortEarly: false})
    const userRecord = await getUserByEmail(req.body.email);
    if (!userRecord) {
      throw new Error('User not found')
    } else {
      const correctPassword = await argon2.verify(userRecord.password, req.body.password);
      if (!correctPassword) {
        throw new Error('Incorrect password')
      }
    }
    res.status(200).send({...userRecord});
  } catch (error) {
    res.status(400).send(error.message);
  }
};
