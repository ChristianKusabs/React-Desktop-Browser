import React from 'react';

import Topbar from "./topbar";
import FinderWindow from "./finderwindow";
import Console from "./console";

class Window extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            processID: props.processID,
            isDragging: false,
            x: props.startX,
            y: props.startY,
            dragStartX: 0,
            dragStartY: 0,
            zIndex: 1,
            windowType: props.windowType
        }
    }

    clickedOn = () => {
        let newZindex = this.props.getzIndex();
        this.setState({ zIndex: newZindex});
    }

    startDrag = (ix, iy) => {
        let newZindex = this.props.getzIndex();
        this.setState({
            zIndex: newZindex,
            dragStartX: ix - this.state.x,
            dragStartY: iy - this.state.y
        });
    }

    drag = (ix, iy) => {
        
        this.setState({
            x: ix - this.state.dragStartX,
            y: iy - this.state.dragStartY
        });
    }

    render() {
        let inputStyle = {
            position: "absolute",
            //backdropFilter: "blur(6px)",
            width: "550px",
            height: "375px",
            top: this.state.y + "px",
            left: this.state.x + "px",
            borderRadius: "5px",
            zIndex: this.state.zIndex
        };

        let windowType = "";

        if (this.state.windowType === "console") {
            windowType = <Console processID={this.state.processID}/>;
        } else if (this.state.windowType === "finder") {
            windowType = <FinderWindow processID={this.state.processID}/>;
        }

        return <div style={inputStyle} id={"window" + this.state.processID} onClick={this.clickedOn}>

        <Topbar
            processID={this.state.processID}
            callback={this.drag}
            startDrag={this.startDrag}
            getMouseBar={this.reposition}
            close={this.props.close}
            minimise={this.props.minimise}
            expand={this.props.expand}
        />

        {windowType}
        </div>
    }
}

export default Window;