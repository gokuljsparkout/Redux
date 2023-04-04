
import { configureStore } from "@reduxjs/toolkit";


const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
  reducer: {

  },
  
});


export default store;
