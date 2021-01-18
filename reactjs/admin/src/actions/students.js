import apis from "../apis";
import {
    FETCH_STUDENTS,
    FETCH_STUDENTS_SUCCESS,
    FETCH_STUDENTS_FAILED,
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
                    payload: { students: data.list },
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
