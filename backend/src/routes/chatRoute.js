import express from "express";

import { createChat } from '../controllers/chatController.js';
import { chatMiddleware } from '../middlewares/chatValidation.middleware.js';
import { verifyToken } from '../middlewares/userValidation.middleware.js';

const router = express.Router();

router.post("/chat", verifyToken, chatMiddleware, createChat);

export default router;
