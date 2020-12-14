class App extends React.Component {
    constructor() {
        super();
        this.state = {
            numberGuessed: 0,
        };
    }

    guessed = () => {
        this.setState({ numberGuessed: this.state.numberGuessed + 1 });
    };

    render() {
        const { numberGuessed } = this.state;
        return (
            <div>
                <Header numberGuessed={numberGuessed} />
                <Main guessed={this.guessed} numberGuessed={numberGuessed} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
