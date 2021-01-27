import {
    FETCH_STUDENTS,
    FETCH_STUDENTS_SUCCESS,
    FETCH_STUDENTS_FAILED,
    ADD_STUDENT,
    ADD_STUDENT_SUCCESS,
    ADD_STUDENT_FAILED,
} from "../constants/action-types";

let initialStudent = {
    list: {
        students: [],
        isLoading: false,
        message: "",
        total: 0,
    },
    add: {
        isLoading: false,
        message: "",
        success: false,
    },
};

function studentsReducer(state = initialStudent, action) {
    switch (action.type) {
        case FETCH_STUDENTS:
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: true,
                    message: "",
                },
            };
        case FETCH_STUDENTS_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: false,
                    message: "",
                    total: action.payload.total,
                    students: action.payload.students,
                },
            };
        case FETCH_STUDENTS_FAILED:
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: false,
                    message: action.payload.message,
                },
            };

        case ADD_STUDENT:
            return {
                ...state,
                add: {
                    ...state.add,
                    isLoading: true,
                    message: "",
                    success: false,
                },
            };
        case ADD_STUDENT_SUCCESS:
            return {
                ...state,
                add: {
                    ...state.add,
                    isLoading: false,
                    message: action.payload,
                    success: true,
                },
            };
        case ADD_STUDENT_FAILED:
            return {
                ...state,
                add: {
                    ...state.add,
                    isLoading: false,
                    message: action.payload,
                    success: false,
                },
            };
        default:
            return state;
    }
}

export default studentsReducer;
