import { getUserByEmail } from "../services/userService.js";
import yup from "yup";
import jwt from "jsonwebtoken";

export const createUserSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required()
    .test("unique-email", "Email must be unique", async function (value) {
      if (!value) return true;
      const user = await getUserByEmail(value);
      console.log(user);
      return !user;
    }),
  password: yup
    .string()
    .required()
    .min(8)
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

