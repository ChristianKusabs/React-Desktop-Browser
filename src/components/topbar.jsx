import React from 'react';

import ButtonRow from "./buttonrow";

class Topbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDragging: false,
            isMissing: false,
            processID: props.processID
        }
    }

    detectDragging = (e) => {

        if (e.type === "mousedown") {
            this.setState({ isDragging: true });
            this.props.startDrag(e.clientX, e.clientY);
        } else {
            this.setState({ isDragging: false });
        }

    }

    _onMouseMove(e) {

        if (this.state.isDragging) {
            this.props.callback(e.clientX, e.clientY);
        }

    }

    _onMouseEnter(e) {
        this.setState({ isMissing: false });
    }

    _onMouseLeave(e) {

        if (this.state.isDragging) {
            //this.props.callback(e.clientX, e.clientY);
            this.props.callback(e.clientX, e.clientY);
            console.log("LEFT THE AREA WHILE DRAGGING!");
            console.log("CLIENTX: " + e.clientX);
            console.log("CLIENTY: " + e.clientY);

        }

    }

    render() {
        let inputStyle = {
            //backgroundColor: "#4E4F50",
            backgroundColor: "#D6D6D6",
            width: "100%",
            height: "20px",
            borderRadius: "5px 5px 0px 0px"
        };

        return (
            <div style={inputStyle} id={"topbar" + this.state.processID} onMouseDown={this.detectDragging} onMouseUp={this.detectDragging} onMouseMove={this._onMouseMove.bind(this)} onMouseEnter={this._onMouseEnter.bind(this)} onMouseLeave={this._onMouseLeave.bind(this)}>
                <ButtonRow processID={this.state.processID} windowClose={this.props.close} windowMinimise={this.props.minimise} windowExpand={this.props.expand}/>
            </div>
        );
    }
}

export default Topbar;