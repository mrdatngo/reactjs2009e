import {
    FETCH_STUDENTS,
    FETCH_STUDENTS_SUCCESS,
    FETCH_STUDENTS_FAILED,
} from "../constants/action-types";

let initialStudent = {
    list: {
        students: [],
        isLoading: false,
        message: "",
    },
};

function studentsReducer(state = initialStudent, action) {
    switch (action.type) {
        case FETCH_STUDENTS:
            return {
                list: {
                    ...state.list,
                    isLoading: true,
                    message: "",
                },
            };
        case FETCH_STUDENTS_SUCCESS:
            return {
                list: {
                    ...state.list,
                    isLoading: false,
                    message: "",
                    students: action.payload.students,
                },
            };
        case FETCH_STUDENTS_FAILED:
            return {
                list: {
                    ...state.list,
                    isLoading: false,
                    message: action.payload.message,
                },
            };
        default:
            return state;
    }
}

export default studentsReducer;
