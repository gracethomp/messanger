import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Failed to log in");
      }
      const authToken = response.headers.get("Authorization");
      return { ...response.body, token: authToken };
    } catch (error) {
      throw error;
    }
  }
);
