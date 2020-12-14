class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const { numberGuessed } = this.props;
        return (
            <header
                className="jumbotron text-center"
                style={{ backgroundColor: numberGuessed >= 7 && "red" }}
            >
                <h3>Guessing random number</h3>
                {/* {randomNumber} : {number} */}
                <p>
                    Tôi đã chọn một số random trong khoảng 1-100, bạn có thể
                    đoán được?
                </p>
            </header>
        );
    }
}
