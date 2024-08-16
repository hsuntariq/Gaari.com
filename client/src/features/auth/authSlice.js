// import two things
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "./authService";

// check for user in the localstorage

const userExists = JSON.parse(localStorage.getItem("user"));

// define initial State

const initialState = {
  user: userExists ? userExists : null,
  userLoading: false,
  userError: false,
  userSuccess: false,
  userMessage: "",
  userSuccessMessage: "",
};

// make function to handle the state

export const signIn = createAsyncThunk(
  "sign-in",
  async (frontendData, thunkAPI) => {
    try {
      return await loginUser(frontendData);
    } catch (error) {
      console.log(error);
    }
  }
);

// make the state global

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        localStorage.removeItem("user");
        state.user = null;
        state.userLoading = false;
        state.userError = true;
        state.userSuccess = false;
        state.userMessage = action.payload;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.userSuccessMessage = "Welcome";
        state.user = action.payload;
      });
  },
});

//export the slice to store

export default authSlice.reducer;
