import { Component } from "react";
// import Parent from "./lifecycle/Parent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./loginform/LoginPage";
import HomePage from "./pages/HomePage";
class App extends Component {
    constructor() {
        super();
        // console.log("App Constructor");
    }
    render() {
        // console.log("App render");
        return (
            <Router>
                {/* Link */}
                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/home">
                        <HomePage />
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
