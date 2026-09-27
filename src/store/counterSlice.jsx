import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./authSlice";

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state, action) => {
      state.value = 0;
      console.log(action);
    });
  },
});

export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
