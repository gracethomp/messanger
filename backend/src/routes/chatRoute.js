import express from "express";

import { createChat } from '../controllers/chatController.js';
import { chatMiddleware } from '../middlewares/chatValidation.middleware.js';

const router = express.Router();

router.post("/chat", chatMiddleware, createChat);

export default router;
