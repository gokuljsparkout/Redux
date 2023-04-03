import createSagaMiddleware from "@redux-saga/core";
import UserReducer from '../Features/User/UserSlice'
import { configureStore } from "@reduxjs/toolkit";
import watchGetUsersSaga from "../Features/User/WatchUsersSaga";

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
  reducer: {
    users : UserReducer,

  },
  
 middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchGetUsersSaga);

export default store;
