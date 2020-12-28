import axios from "axios";

export default {
    login: (data) => axios.post("http://localhost:8080/api/auth/login", data),
};
