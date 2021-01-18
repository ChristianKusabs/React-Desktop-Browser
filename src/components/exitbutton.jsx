import React from 'react';

class ExitButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            processID: props.processID,
            isHover: false
        }
    }

    hover = () => {
        if (this.state.isHover) {
            this.setState({ isHover: false });
        } else {
            this.setState({ isHover: true });
        }
    }

    exitWindow = () => {
        this.props.exitWindow(this.state.processID);
    }

    render() {

        let background;

        if (this.state.isHover) {
            background = "#ff7979";
        } else {
            background = "#eb4d4b";
        }

        let inputStyle = {
            backgroundColor: background,
            width: "12px",
            height: "12px",
            borderRadius: "100px",
            position: "relative",
            left: "5px",
            top: "3px"
        };

        return (
            <div style={inputStyle} id={"exit" + this.state.processID} onMouseEnter={this.hover} onMouseLeave={this.hover} onClick={this.exitWindow}></div>
        );
    }
}

export default ExitButton;