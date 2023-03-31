const createSlice = require("@reduxjs/toolkit").createSlice;

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
  extraReducers: {
    ['cake/ordered']: (state) => {
      state.numberOfIceCream--;
    },
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
