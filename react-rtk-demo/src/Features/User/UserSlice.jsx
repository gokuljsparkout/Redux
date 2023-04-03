import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      console.log('get user state changed')
      state.loading = true;
      state.error = null;
    },
    getUsersSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    getUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {getUsers,getUsersSuccess,getUsersFailure} = UserSlice.actions;
export default UserSlice.reducer;