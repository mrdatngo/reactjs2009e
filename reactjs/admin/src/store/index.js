import { createStore } from "redux";
import authReducer from "../reducers/auth";

var store = createStore(authReducer);

export default store;
