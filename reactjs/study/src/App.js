import { Component } from "react";
// import Parent from "./lifecycle/Parent";
import LoginPage from "./loginform/LoginPage";
class App extends Component {
    constructor() {
        super();
        // console.log("App Constructor");
    }
    render() {
        // console.log("App render");
        return <LoginPage />;
    }
}

export default App;
