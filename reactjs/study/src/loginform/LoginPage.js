import React, { Component } from "react";
import apis from "../apis";
import { saveToken } from "../helper";

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            loading: false,
            message: "",
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
            this.setState({ errors: {}, loading: true, message: "" });
            // alert("Login di");
            const { username, password } = this.state;
            apis.login({ username, password })
                .then((res) => {
                    console.log("res: ", res);
                    // redirect to homepage
                    if (res.data.success) {
                        let token = res.data.token;
                        if (token) {
                            saveToken(token);
                            // alert("Redirect to HomePage");
                            window.location = "/";
                        } else {
                            this.setState({ message: "Something went wrong!" });
                        }
                    } else {
                        let message = "Something went wrong!"; // default message
                        if (res.data.message) {
                            // server message
                            message = res.data.message;
                        }
                        this.setState({ message });
                    }
                    this.setState({ loading: false });
                })
                .catch((err) => {
                    if (err.response) {
                        console.log("err.response: ", err.response);
                    } else {
                        console.log("Check network");
                    }
                    this.setState({
                        loading: false,
                        message: "Something went wrong!",
                    });
                });

            // call api login with username and password
        }
    };

    render() {
        return (
            <form style={{ textAlign: "center" }}>
                <h3>Login</h3>
                <p>{this.state.message}</p>
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
                <input
                    onClick={this.submit}
                    type="submit"
                    disabled={this.state.loading}
                    value={this.state.loading ? "Submiting..." : "Login"}
                />
            </form>
        );
    }
}

export default LoginPage;
