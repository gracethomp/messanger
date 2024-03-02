import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error("Failed to log in");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});
