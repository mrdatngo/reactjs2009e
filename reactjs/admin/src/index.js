import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import jwt from "jsonwebtoken";

import store from "./store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { getToken } from "./helper";
import { LOGIN_SUCCESS } from "./constants/action-types";

let token = getToken();

if (token) {
    let pubData = jwt.decode(token);
    let now = new Date().getTime() / 1000; // timestamp in seconds
    if (pubData && pubData.exp > now) {
        store.dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                token: token,
                username: pubData.username,
            },
        });
    }
}

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>,
    // </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
