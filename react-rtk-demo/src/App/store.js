
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/Counter/counterSlice'

//import { getDefaultMiddleware } from "@reduxjs/toolkit";
//import { createLogger } from "redux-logger";

// const logger = createLogger;
const store = configureStore({
  reducer: {
    counter : counterReducer,
  },
  
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
