import React, { Component } from "react";

class Child extends Component {
    constructor() {
        super();
        this.state = {
            timer: "--:--",
        };
        console.log("Child Contructor");
    }

    // not encourage
    static getDerivedStateFromProps(props, state) {
        return { ...state, counter: props.counter };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.counter != this.props.counter;
    }

    componentDidMount() {
        console.log("Child ComponentDidMount");
        this.interval = setInterval(() => {
            console.log("Timer running");
            this.setState({ timer: new Date().toLocaleTimeString() });
        }, 1000);
    }

    componentDidUpdate() {
        console.log("Child ComponentDidUpdate");
    }

    componentWillUnmount() {
        console.log("Child ComponentWillUnmount - Clean");
        clearInterval(this.interval);
    }

    render() {
        console.log("Child rendering");
        return (
            <div>
                <h3>Child</h3>
                <p>Counter: {this.props.counter}</p>
                <p>Timer: {this.state.timer}</p>
            </div>
        );
    }
}

export default Child;
