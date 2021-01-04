import React, { Component, PureComponent } from "react";

class AboutPage extends PureComponent {
    render() {
        console.log("About rendering...");
        return (
            <div>
                About Page
                <hr />
                Counter: {this.props.counter}
            </div>
        );
    }
}

export default AboutPage;
