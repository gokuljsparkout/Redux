
import { configureStore } from "@reduxjs/toolkit";

//import { getDefaultMiddleware } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
//import { createLogger } from "redux-logger";
import iceCreamReducer from "../Features/IceCream/iceCreamSlice";
import userReducer from "../Features/User/userSlice";

// const logger = createLogger;
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user : userReducer,
  },
  
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
