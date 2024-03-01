import { getUserByEmail } from "../controllers/userController.js";
import yup from "yup";

export const createUserSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required()
    .test("unique-email", "Email must be unique", async function (value) {
      if (!value) return true;
      const user = await getUserByEmail(value);
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
