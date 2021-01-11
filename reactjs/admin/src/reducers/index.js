import { combineReducers } from "redux";

import authReducer from "./auth";
import studentReducer from "./students";

let reducersAll = combineReducers({
    auth: authReducer,
    students: studentReducer,
});

export default reducersAll;
