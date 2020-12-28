export const saveToken = (token) => {
    localStorage.setItem("token", token);
};

export const getToken = (token) => {
    localStorage.getItem("token");
};
