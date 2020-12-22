import { Component } from "react";
import Parent from "./lifecycle/Parent";

class App extends Component {
    constructor() {
        super();
        // console.log("App Constructor");
    }
    render() {
        // console.log("App render");
        return <Parent />;
    }
}

export default App;
