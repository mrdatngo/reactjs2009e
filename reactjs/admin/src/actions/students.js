import apis from "../apis";
import {
    FETCH_STUDENTS,
    FETCH_STUDENTS_SUCCESS,
    FETCH_STUDENTS_FAILED,
    ADD_STUDENT,
    ADD_STUDENT_SUCCESS,
    ADD_STUDENT_FAILED,
} from "../constants/action-types";

export const fetchStudentsAction = (data) => (dispatch) => {
    console.log("Start fetching students");
    dispatch({
        type: FETCH_STUDENTS,
    });
    apis.getStudents(data)
        .then((resp) => {
            let { data } = resp;
            if (data && data.success) {
                dispatch({
                    type: FETCH_STUDENTS_SUCCESS,
                    payload: { students: data.list, total: data.total },
                });
            } else {
                dispatch({
                    type: FETCH_STUDENTS_FAILED,
                    payload: {
                        message: data.message,
                    },
                });
            }
        })
        .catch((err) => {
            dispatch({
                type: FETCH_STUDENTS_FAILED,
                payload: {
                    message: "Something went wrong!",
                },
            });
        });
};

export const addStudentAction = (data) => (dispatch) => {
    dispatch({
        type: ADD_STUDENT,
    });
    apis.addStudent(data)
        .then((resp) => {
            let { data } = resp;
            if (data.success) {
                dispatch({
                    type: ADD_STUDENT_SUCCESS,
                    payload: data.message,
                });
            } else {
                dispatch({
                    type: ADD_STUDENT_FAILED,
                    payload: data.message,
                });
            }
        })
        .catch((err) => {
            alert("Come here");
            dispatch({
                type: ADD_STUDENT_FAILED,
                payload: "Something went wrong!",
            });
        });
};
