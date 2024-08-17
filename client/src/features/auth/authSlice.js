// import two things
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, signUpUser } from "./authService";

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
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const registerUser = createAsyncThunk(
  "sign-up",
  async (frontendData, thunkAPI) => {
    try {
      return await signUpUser(frontendData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

// make the state global

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userReset: (state) => {
      state.userLoading = false;
      state.userError = false;
      state.userSuccess = false;
      state.userMessage = "";
      state.userSuccessMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.user = null;
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
        state.user = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
        state.userSuccessMessage = "welcome";
      });
  },
});

// export reducers

export const { userReset } = authSlice.actions;

//export the slice to store

export default authSlice.reducer;
