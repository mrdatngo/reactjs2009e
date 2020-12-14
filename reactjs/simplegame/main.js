class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 0,
            message: "",
            randomNumber: this.getRandomNumber(1, 100),
        };
        // this.onInputChange = this.onInputChange.bind(this);
    }

    newGame = () => {
        this.setState({
            // numberGuessed: 0,
            number: 0,
            message: "",
            randomNumber: this.getRandomNumber(1, 100),
        });
    };

    getRandomNumber = (from, to) => {
        return from + Math.floor(Math.random() * (to - from + 1));
    };

    guess = () => {
        // javascript - uncontrol
        // alert(document.getElementById("input-number").value);
        // const randomNumber = this.state.randomNumber;
        // const number = this.state.number;
        // object destructuring
        let { randomNumber, number } = this.state;
        // console.log("randomNumber:", randomNumber, "number: ", number);
        let message = "";
        if (number > randomNumber) {
            message = "Bạn đã đoán lơn hơn!";
        } else if (number < randomNumber) {
            message = "Bạn đã đoán nhỏ hơn!";
        } else {
            message = "Congrats!";
        }
        // numberGuessed++;
        // need to update numberGuessed
        this.props.guessed();
        this.setState({ message });
    };

    onInputChange = (event) => {
        // console.log("event: ", event);
        let number = Number(event.target.value);
        // console.log("number: ", number, typeof number);
        this.setState({ number });
    };

    render() {
        const { randomNumber, number, message } = this.state;
        const { numberGuessed } = this.props;
        return (
            <section className="main">
                <button onClick={this.newGame}>New Game</button>
                <hr />
                <p>Số lần bạn đã đoán: {numberGuessed}</p>
                <label htmlFor="input-number">Số bạn đoán là</label>
                <input
                    min="0"
                    max="100"
                    type="number"
                    id="input-number"
                    value={number}
                    onChange={this.onInputChange}
                />
                <button className="btn-success" onClick={this.guess}>
                    Đoán
                </button>
                <p>{message}</p>
            </section>
        );
    }
}
