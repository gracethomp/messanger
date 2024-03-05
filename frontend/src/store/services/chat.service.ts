import { createAsyncThunk } from "@reduxjs/toolkit";

interface ErrorResponse {
  message: string;
}

export const createChat = createAsyncThunk(
  "chat/create",
  async (payload: { user2: string }) => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoibWFpbDIzQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MDk2NzE0MDMsImV4cCI6MTcwOTY5MzAwM30.0Y8hEKSoGh3uKHMcfBu4hgIyClswDpi9UlCKrX6JHQA",
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
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/chat", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoibWFpbDIzQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MDk2NzE0MDMsImV4cCI6MTcwOTY5MzAwM30.0Y8hEKSoGh3uKHMcfBu4hgIyClswDpi9UlCKrX6JHQA",
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
