import { configureStore } from "@reduxjs/toolkit";
//import { reducer } from "./reducer";
import userReducer from "./reducer";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

const users = configureStore({
  reducer: userReducer,
});

export default users;
