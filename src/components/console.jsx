import React from 'react';

class Console extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            processID: props.processID
        };
    }

    keyCheck = (e) => {
        if (e.keyCode === 13) {
            window.alert(document.getElementById("consoleContent" + this.state.processID).innerHTML);
        }
    }

    focus = () => {
        document.getElementById("consoleContent" + this.state.processID).focus();
    }

    render() {
        let inputStyle = {
            height: "100%",
            color: "white",
            backgroundColor: "rgba(16, 18, 20, 0.90)",
            backdropFilter: "blur(6px)",
            padding: "5px 10px 5px 7px",
            fontFamily: "Courier New, monospace",
            fontSize: "12px"
        };

        let consoleHeader = {
            float: "left"
        };

        let consoleContent = {
            overflow: "hidden",
            position: "relative",
            outlineWidth: "0"
        };

        return (
            <div style={inputStyle} onClick={this.focus}>
                Last login: Thu Oct 24 18:42:30 on ttys007<br></br>
                <div>
                    <div id={"consoleHeader" + this.state.processID} style={consoleHeader}>
                    ChristiansMacbook:~ christian$&nbsp;
                    </div>
                    <div id={"consoleContent" + this.state.processID} style={consoleContent} contentEditable="true" onKeyDown={this.keyCheck}></div>
                </div>
            </div>
        );
    }
}

export default Console;