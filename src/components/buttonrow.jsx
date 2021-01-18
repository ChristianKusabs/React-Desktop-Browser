import React from 'react';

import ExpandButton from "./expandbutton";
import MinimiseButton from "./minimisebutton";
import ExitButton from "./exitbutton";

class ButtonRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            processID: props.processID
        };
    }

    render() {
        let inputStyle = {
            height: "100%",
            width: "47px",
            display: "flex",
            justifyContent: "space-between"
        }

        return (
            <div style={inputStyle} id={"buttonrow" + this.state.processID}>
                <ExitButton processID={this.state.processID} exitWindow={this.props.windowClose}/>
                <MinimiseButton processID={this.state.processID} minimiseWindow={this.props.windowMinimise}/>
                <ExpandButton processID={this.state.processID} expandWindow={this.props.windowExpand}/>
            </div>
        );
    }
}

export default ButtonRow;