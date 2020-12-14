// let h3 = React.createElement("h3", null, "Hello World");
// let p = React.createElement("p", "", "Lorem.....");
// let div = React.createElement("div", null, h3, p);

// let name = "Peter";

// let myDiv = (
//     <div>
//         <h3>Hello world: {name}</h3> <p>Lorem.......</p>
//         <p>TEST</p>
//     </div>
// );

// // let myDiv = React.createElement(
// //     "div",
// //     null,
// //     /*#__PURE__*/ React.createElement("h3", null, "Hello world"),
// //     " ",
// //     /*#__PURE__*/ React.createElement("p", null, "Lorem.......")
// // );

// ReactDOM.render(myDiv, document.getElementById("app"));

// class Component
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h3>Hello world</h3>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Perspiciatis aut nemo, magnam soluta ex ratione non numquam
//                     vero ipsa ullam minima modi atque quam, natus hic vitae
//                     dolor sequi cum.
//                 </p>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<App />, document.getElementById("app"));

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: "-- : --",
            value: "",
        };
        // this.run();
    }

    run = () => {
        setInterval(() => {
            this.setState({
                timer: new Date().toLocaleTimeString(),
            });
            // console.log("Timer: ", this.state.timer);
        }, 1000);
    };

    show = () => {
        // uncontrol
        // var inputElem = document.getElementById("input");
        // alert(inputElem.value);
        alert(this.state.value);
    };

    onInputChange = (event) => {
        // console.log(event.target.value);
        // store to state
        this.setState({ value: event.target.value });
    };

    render() {
        // console.log("Render");
        // let timer = `"${this.state.timer}"`;
        // this.setState({ timer: timer }); never setState in render
        let { timer } = this.state; // object destructuring <=> let timer = this.state.timer
        return (
            <div>
                <h3>Clock</h3>
                <p>Timer: {timer}</p>
                <button onClick={this.run}>Run</button>
                <hr />
                <input type="text" id="input" onChange={this.onInputChange} />
                <button onClick={this.show}>Show</button>
            </div>
        );
    }
}

ReactDOM.render(<Clock />, document.getElementById("app"));
