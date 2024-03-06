import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from '../services';


interface AuthState {
  isLoggedIn: boolean;
  status: string;
  email: string;
  token: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  status: 'idle',
  email: '',
  token: '',
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    setEmail(state, action) {
      state.email = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoggedIn = true;
        state.token = action.payload.token;
        // state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.isLoggedIn = false;
        // state.error = action.error.message;
      });
  },
});

export const { login, logout, setEmail } = authSlice.actions;

export default authSlice.reducer;
