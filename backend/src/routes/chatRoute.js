import express from "express";

import { createChat, getChatsByUser } from '../controllers/chatController.js';
import { chatMiddleware } from '../middlewares/chatValidation.middleware.js';
import { verifyToken } from '../middlewares/userValidation.middleware.js';

const router = express.Router();

router.post("/chat", verifyToken, chatMiddleware, createChat);
router.get("/chat", verifyToken, getChatsByUser)

export default router;
