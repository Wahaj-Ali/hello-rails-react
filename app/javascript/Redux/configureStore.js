import { combineReducers, configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./Messages/messagesReducer";

const reducer = combineReducers({
  messages: messagesReducer,
});

const store = configureStore({
  reducer,
});

export default store;