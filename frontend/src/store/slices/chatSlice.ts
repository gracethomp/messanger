import { createSlice } from "@reduxjs/toolkit";
import { Chat } from "../../utils/types";
import { getAllChats } from '../services/chat.service';

interface ChatState {
  chats: Chat[];
  status: string;
}

const initialState: ChatState = {
  chats: [],
  status: "",
};

const authSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllChats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllChats.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.chats = action.payload;
        // state.error = null;
      })
      .addCase(getAllChats.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
