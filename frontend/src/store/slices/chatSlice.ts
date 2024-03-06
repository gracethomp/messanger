import { createSlice } from "@reduxjs/toolkit";
import { Chat } from "../../utils/types";
import { getAllChats } from "../services/chat.service";

interface ChatState {
  chats: Chat[];
  status: string;
  currentChatId?: Chat;
}

const initialState: ChatState = {
  chats: [],
  status: "",
};

const authSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setCurrentChat(state, action) {
      state.currentChatId = action.payload;
    }
  },
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

export const { setCurrentChat } = authSlice.actions;

export default authSlice.reducer;
