var initialState = {
    isLoading: false,
    username: "",
    token: "",
    errMessage: "",
};

function authReducer(state = initialState, action) {
    console.log(state, action);
    switch (action.type) {
        case "LOGIN":
            return { ...state, errMessage: "", isLoading: true };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoading: false,
                username: action.payload.username,
                token: action.payload.token,
            };

        case "LOGIN_FAIL":
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
