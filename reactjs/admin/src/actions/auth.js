import apis from "../apis";
import { saveToken } from "../helper";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "../constants/action-types";

const loginAction = (data) => (dispatch) => {
    console.log("dispatch: ", dispatch, data);
    // notify login action start
    dispatch({
        type: LOGIN,
    });
    // call api login
    apis.login(data)
        .then((res) => {
            const { data } = res;
            if (data.success) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        token: data.token,
                        username: data.username,
                    },
                });
                saveToken(data.token);
                // window.location = "/"; // refresh - accepted
            } else {
                dispatch({
                    type: LOGIN_FAILED,
                    payload: {
                        message: data.message,
                    },
                });
            }
        })
        .catch(() => {
            dispatch({
                type: LOGIN_FAILED,
                payload: {
                    message: "Something went wrong!!",
                },
            });
        });
    // new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve({
    //             token: "ey......",
    //             username: data.username,
    //             success: true,
    //         });
    //     }, 1000);
    // }).then((data) => {
    //     console.log("Call api done!");
    //     if (data.success) {
    //         store.dispatch({
    //             type: "LOGIN_SUCCESS",
    //             payload: {
    //                 token: data.token,
    //                 username: data.username,
    //             },
    //         });
    //         window.location = "/";
    //     } else {
    //         store.dispatch({
    //             type: "LOGIN_FAIL",
    //             payload: {
    //                 message: "Username or password is incorrect!",
    //             },
    //         });
    //     }
    // });
};

export { loginAction };
