import React, { Component } from "react";

import store from "./store";

function IncreaseAction() {
    store.dispatch({
        type: "INCREASE_COUNTER",
    });
}

// function IncreaseDelayAction() {
//     setTimeout(() => {
//         store.dispatch({
//             type: "INCREASE_COUNTER",
//         });
//     }, 1000);
// }

function IncreaseDelayAction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            store.dispatch({
                type: "INCREASE_COUNTER",
            });
            resolve();
        }, 1000);
    });
}

function IncreaseByValueAction(value) {
    store.dispatch({
        type: "INCREASE_COUNTER_BY_VALUE",
        payload: value,
    });
}

class Main extends Component {
    state = {
        counter: 0,
        value: 1,
    };

    componentDidMount() {
        // listen from store
        store.subscribe(() => {
            console.log("state: ", store.getState());
            this.setState({ counter: store.getState().counter });
        });
    }

    increase = () => {
        IncreaseAction();
        this.setState({ counter: store.getState().counter });
    };

    // increaseDelay = () => {
    //     IncreaseDelayAction();
    //     this.setState({ counter: store.getState().counter });
    // };

    increaseDelay = () => {
        IncreaseDelayAction().then(() => {
            this.setState({ counter: store.getState().counter });
        });
    };

    increaseByValue = () => {
        IncreaseByValueAction(this.state.value);
    };

    onInputChange = (event) => {
        let value = Number(event.target.value);
        this.setState({ value });
    };

    render() {
        return (
            <div>
                <hr />
                <button onClick={this.increase}>Increase</button>
                <br />
                <button onClick={this.increaseDelay}>Increase Delay</button>
                <hr />
                <input
                    type="number"
                    onChange={this.onInputChange}
                    name="value"
                    value={this.state.value}
                />
                <button onClick={this.increaseByValue}>
                    Increase By Value
                </button>
                Counter: {this.state.counter}
            </div>
        );
    }
}

export default Main;
