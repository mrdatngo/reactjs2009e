import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "../constants/action-types";

var initialState = {
    isLoading: false,
    username: "",
    token: "",
    errMessage: "",
};

// var state = {
//     auth: initialState,
//     students: initialStudent
// }

function authReducer(state = initialState, action) {
    console.log(state, action);
    switch (action.type) {
        case LOGIN:
            return { ...state, errMessage: "", isLoading: true };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                username: action.payload.username,
                token: action.payload.token,
            };

        case LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                errMessage: action.payload.message,
            };
        default:
            return state;
    }
}

export default authReducer;
