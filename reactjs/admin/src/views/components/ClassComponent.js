import React, { Component } from "react";

class ClassComponent extends Component {
    state = {
        counter: 0,
    };

    increase = () => {
        // this.setState({ counter: this.state.counter + 1 });
        // this.setState({ counter: this.state.counter + 2 });

        this.setState((state) => ({ counter: state.counter + 1 }));
        this.setState((state) => ({ counter: state.counter + 2 }));
    };

    componentDidMount() {
        console.log("Class ComponentDidMount");
    }

    componentDidUpdate() {
        console.log("Class ComponentDidUpdate");
        document.title = this.state.counter;
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return (
            <div>
                Class Component
                <hr />
                Counter: {this.state.counter}
                <br />
                <button onClick={this.increase}>Increase</button>
            </div>
        );
    }
}

export default ClassComponent;
