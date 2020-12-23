import React, { Component } from "react";
import apis from "../apis";

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errors: {},
        };
    }

    onInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    // onUsernameChange = (event) => {
    //     console.log("event: ", event);
    //     console.log("value: ", event.target.value);
    //     console.log("name: ", event.target.name);
    //     this.setState({ username: event.target.value });
    // };

    // onPasswordChange = (event) => {
    //     console.log("name: ", event.target.name);
    //     this.setState({ password: event.target.value });
    // };

    validateUsername = (value) => {
        if (!value) {
            return "Please enter your username";
        }
        return "";
    };

    validatePassword = (value) => {
        if (!value) {
            return "Please enter your password";
        }
        return "";
    };

    submit = (event) => {
        event.preventDefault();
        // console.log(
        //     "username: ",
        //     document.getElementsByName("username")[0].value
        // );
        console.log("state: ", this.state);

        const { username, password } = this.state;
        let errorUserMessage = this.validateUsername(username);
        if (errorUserMessage != "") {
            this.setState({ errors: { username: errorUserMessage } });
        }
        let errorPassMessage = this.validatePassword(password);
        if (errorPassMessage != "") {
            this.setState((state) => {
                return {
                    errors: { ...state.errors, password: errorPassMessage },
                };
            });
        }
        if (!errorUserMessage && !errorPassMessage) {
            this.setState({ errors: {} });
            // alert("Login di");
            const { username, password } = this.state;
            apis.login({ username, password });
            // call api login with username and password
        }
    };

    render() {
        return (
            <form style={{ textAlign: "center" }}>
                <h3>Login</h3>
                <label htmlFor="username">User name</label>
                <input
                    type="text"
                    name="username"
                    onChange={this.onInputChange}
                />
                <span>{this.state.errors.username}</span>
                <br />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={this.onInputChange}
                />
                <span>{this.state.errors.password}</span>
                {/* <button>Login</button> */}
                <br />
                <input onClick={this.submit} type="submit" value="Login" />
            </form>
        );
    }
}

export default LoginPage;
