import axios from "axios";

export default {
    // auth
    login: (data) => {
        console.log("data: ", data);
        return axios.post("http://localhost:8080/api/auth/login", data);
    },
    // students
    getStudents: (data) => {
        return axios.get("http://localhost:8080/api/students/list");
    },
};
