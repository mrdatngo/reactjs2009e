import { createStore } from "redux";

const initialState = {
    counter: 0,
};

function reducer(state = initialState, action) {
    console.log("state: ", state, "action: ", action);
    switch (action.type) {
        case "INCREASE_COUNTER":
            return { counter: state.counter + 1 };

        case "INCREASE_COUNTER_BY_VALUE":
            return { counter: state.counter + action.payload };
        default:
            return state;
    }
}
const store = createStore(reducer);
export default store;
