import React, { Component } from "react";

import store from "./store";

class Header extends Component {
    state = {
        counter: 0,
    };

    componentDidMount() {
        // listen from store
        store.subscribe(() => {
            console.log("state: ", store.getState());
            this.setState({ counter: store.getState().counter });
        });
    }

    render() {
        return <div>Counter: {this.state.counter}</div>;
    }
}

export default Header;
