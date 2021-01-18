import React from 'react';

import Window from "./window";
import Taskbar from "./taskbar";

class Desktop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mouseX: 0,
            mouseY: 0,
            click: 1,
            realign: false,
            processes: [
                {
                    id: "1",
                    startX: "100",
                    startY: "100",
                    currentX: "100",
                    currentY: "100",
                    windowType: "console"
                },

                {
                    id: "2",
                    startX: "800",
                    startY: "200",
                    currentX: "800",
                    currentY: "200",
                    windowType: "finder"
                },

                {
                    id: "3",
                    startX: "500",
                    startY: "400",
                    currentX: "800",
                    currentY: "200",
                    windowType: "finder"
                },
            ]
        }
    }

    close = (id) => {
        //window.alert("CLOSE" + id);
        let temp = this.state.processes;

        for (let i = 0; i < this.state.processes.length; i++) {

            if (this.state.processes[i].id === id) {
                temp.splice(i, 1);
                this.setState({processes: temp});
            }
        }
    }

    minimise = (id) => {
        window.alert("MINIMISE");
    }

    getzIndex = () => {
        this.setState({click: (this.state.click + 1)});
        return this.state.click;
    }

    expand = (isExpanded, id, oldHeight, oldWidth, oldX, oldY) => {
        console.log(id);
        var element = document.getElementById("window" + id);

        if (isExpanded) {
            element.classList.add("reduceExpandAnimation");
            element.classList.remove("expandAnimation");

            setTimeout(() => {
                element.classList.remove("reduceExpandAnimation");
            }, 1000)
        } else {
            element.classList.add("expandAnimation");
        }
    }

    getMousePos = () => {
        console.log("X: " + this.state.mouseX + ", Y: " + this.state.mouseY);
        return { x: this.state.mouseX, y: this.state.mouseY };
    }

    changeCoords = (id, newx, newy) => {

        let temp = this.state.processes;

        temp[id].currentX = newx;
        temp[id].currentY = newy;

        this.setState({
            processes: temp
        })
    }

    _onMouseMove = (e) => {
        this.setState({ mouseX: e.clientX, mouseY: e.clientY })
    }

    render() {
        let inputStyle = {
            position: "absolute",
            //backgroundColor: "#647C90",
            backgroundColor: "#4791FB",
            width: "100%",
            height: "100%"
        };

        return (
            <div style={inputStyle} id="desktop" onMouseMove={this._onMouseMove.bind(this)}>
                {this.state.processes.map((t, i) =>
                    <Window
                        key={t.id}
                        windowType={t.windowType}
                        startX={t.startX}
                        startY={t.startY}
                        processID={t.id}
                        getMouse={this.getMousePos}
                        close={this.close}
                        minimise={this.minimise}
                        expand={this.expand}
                        getzIndex={this.getzIndex}
                        currentX={t.currentX}
                        currentY={t.currentY}
                    />)
                }
                <Taskbar />
            </div>
        );
    }
}

export default Desktop;