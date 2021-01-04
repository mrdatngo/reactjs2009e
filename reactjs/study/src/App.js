import { Component } from "react";
// import Parent from "./lifecycle/Parent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
class App extends Component {
    constructor() {
        super();
        // console.log("App Constructor");
        this.state = {
            counter: 0,
        };
    }

    increase = () => {
        this.setState({ counter: this.state.counter });
    };
    render() {
        // console.log("App render");
        const { counter } = this.state;
        return (
            <Router>
                {/* <nav>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/option1">Option1</Link>
                        </li>
                    </ul>
                </nav>
                <button onClick={this.increase}>Increase</button> */}
                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/about">
                        <AboutPage counter={counter} />
                    </Route>
                    <Route path="/contact">
                        <ContactPage counter={counter} />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
