import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCount: (state) => {state.count++},
    decreaseCount: (state) => {state.count--},
  },
});

export default countSlice.reducer;
export const { increaseCount, decreaseCount } = countSlice.actions;
