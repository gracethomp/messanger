import { getUserByEmail } from "../controllers/userController.js";
import yup from 'yup';

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
});
