import { createSlice } from "@reduxjs/toolkit";
import {ordered as CakeOrdered} from '../cake/cakeSlice'

const initialState = {
  numberOfIceCream: 15,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberOfIceCream -= action.payload;
    },
    restocked: (state, action) => {
      state.numberOfIceCream += action.payload;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(CakeOrdered,(state) =>{ state.numberOfIceCream--})

    }
  }
  // {
  //   ["cake/ordered"]: (state) => {
  //     state.numberOfIceCream--;
  //   },
  // },
);

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
