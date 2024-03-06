import yup from "yup";
import { getUserByEmail } from "../services/userService.js";
import { getChatByUsers } from '../services/chatService.js';

export const createChatSchema = yup.object().shape({
  user2: yup
    .string()
    .email()
    .required()
    .test("is email exist", "User should exist", async function (value) {
      const user = await getUserByEmail(value);
      return user;
    }),
});

export const chatMiddleware = async (req, res, next) => {
  if (req.user1 === req.body.user2) {
    return res.status(400).end("User1 and user2 can't be the same");
  }

  const chat = await getChatByUsers(req.user1, req.body.user2);

  if(chat) {
    return res.status(400).end("Should be only one chat");
  }

  const user1 = await getUserByEmail(req.user1);
  const user2 = await getUserByEmail(req.body.user2);

  if (!user1 || !user2) {
    return res.status(401).end("Users don't exists");
  }
  next();
};
