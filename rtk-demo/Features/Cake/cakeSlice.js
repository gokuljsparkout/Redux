const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = { numberofCakes: 10 };

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberofCakes -= action.payload;
    },
    restocked: (state, action) => {
      state.numberofCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;

