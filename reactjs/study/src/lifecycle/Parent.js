import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            status: true,
        };
        console.log("Parent constructoring");
    }

    componentDidMount() {
        // usually get data from external
        // call api/ get data from file...
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(10);
            }, 500);
        }).then((counter) => {
            this.setState({ counter });
        });
        console.log("Parent ComponentDidMount");
    }

    componentDidUpdate() {
        console.log("Parent ComponentDidUpdate");
    }

    increase = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    removeChild = () => {
        this.setState({ status: !this.state.status });
    };

    // childElem = () => {
    //     const { counter, status } = this.state;
    //     return;
    // };

    render() {
        console.log("Parent rendering");
        const { counter, status } = this.state;
        return (
            <div>
                <h3>Parents</h3>
                <p>Counter: {counter}</p>
                <button onClick={this.increase}>Increase</button>
                <hr />
                {/* {this.childElem()} */}
                {/* {status ? <Child counter={counter} /> : ""} */}
                {status && <Child counter={counter} />}
                <button onClick={this.removeChild}>Remove Child</button>
            </div>
        );
    }
}

export default Parent;
