import React from 'react';

class MinimiseButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            processID: props.processID
        }
    }

    hover = () => {
        if (this.state.isHover) {
            this.setState({ isHover: false });
        } else {
            this.setState({ isHover: true });
        }
    }

    minimiseWindow = () => {
        this.props.minimiseWindow(this.state.processID);
    }

    render() {

        let background;

        if (this.state.isHover) {
            background = "#f6e58d";
        } else {
            background = "#f9ca24";
        }

        let inputStyle = {
            backgroundColor: background,
            width: "12px",
            height: "12px",
            borderRadius: "100px",
            position: "relative",
            left: "3px",
            top: "3px"
        };

        return (
            <div style={inputStyle} id={"exit" + this.state.processID} onMouseEnter={this.hover} onMouseLeave={this.hover} onClick={this.minimiseWindow}></div>
        );
    }
}

export default MinimiseButton;