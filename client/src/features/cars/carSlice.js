import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCars } from "./carService";

// define your initial State

const initialState = {
  cars: [],
  carSuccess: false,
  carError: false,
  carLoading: false,
  carMessage: "",
};

//call your service function

export const addCarData = createAsyncThunk(
  "add-car",
  async (frontendData, thunkAPI) => {
    try {
      return await addCars(frontendData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

// make your state global

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    carReset: (state) => {
      state.carError = false;
      state.carLoading = false;
      state.carSuccess = false;
      state.carMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCarData.pending, (state, action) => {
        state.carLoading = true;
      })
      .addCase(addCarData.rejected, (state, action) => {
        state.carLoading = false;
        state.carError = true;
        state.carMessage = action.payload;
      })
      .addCase(addCarData.fulfilled, (state, action) => {
        state.carLoading = false;
        state.carSuccess = true;
        state.cars.push(action.payload);
      });
  },
});

export const { carReset } = carSlice.actions;
export default carSlice.reducer;
