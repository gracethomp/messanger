import { createAsyncThunk } from "@reduxjs/toolkit";

interface ErrorResponse {
  message: string;
}

export const createChat = createAsyncThunk(
  "chat/create",
  async (payload: { user2: string; token: string }) => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: payload.token,
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Failed to log in");
      }
      return response.body;
    } catch (error) {
      throw error;
    }
  }
);

export const getAllChats = createAsyncThunk(
  "chat/fetchChats",
  async (payload: { token: string }, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/chat", {
        method: "GET",
        headers: {
          Authorization: payload.token,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch chats");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      const errorMessage = (error as ErrorResponse).message || "Unknown error";
      return rejectWithValue(errorMessage);
    }
  }
);
