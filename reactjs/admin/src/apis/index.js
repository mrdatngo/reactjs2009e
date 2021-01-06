import axios from "axios";

export default {
    login: (data) => {
        console.log("data: ", data);
        return axios.post("http://localhost:8080/api/auth/login", data);
    },
};
