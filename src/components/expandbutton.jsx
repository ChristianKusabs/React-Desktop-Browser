import React from 'react';

class ExpandButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            processID: props.processID,
            oldHeight: 0,
            oldWidth: 0,
            oldX: 0,
            oldY: 0,
            isExpanded: false
        }
    }

    hover = () => {
        if (this.state.isHover) {
            this.setState({ isHover: false });
        } else {
            this.setState({ isHover: true });
        }
    }

    expandWindow = () => {
        
        if (!this.state.isExpanded) {
            // save old values
            this.props.expandWindow(
                false,
                this.state.processID,
                this.state.oldHeight,
                this.state.oldWidth,
                this.state.oldX,
                this.state.oldY
            )

            this.setState({ isExpanded: true });
        } else {
            this.props.expandWindow(true, this.state.processID, 0, 0, 0, 0);
            this.setState({ isExpanded: false });
        }
    }

    render() {

        let background;

        if (this.state.isHover) {
            background = "#badc58";
        } else {
            background = "#6ab04c";
        }

        let inputStyle = {
            backgroundColor: background,
            width: "12px",
            height: "12px",
            borderRadius: "100px",
            position: "relative",
            left: "2px",
            top: "3px"
        };

        return (
            <div style={inputStyle} id={"exit" + this.state.processID} onMouseEnter={this.hover} onMouseLeave={this.hover} onClick={this.expandWindow}></div>
        );
    }
}

export default ExpandButton;