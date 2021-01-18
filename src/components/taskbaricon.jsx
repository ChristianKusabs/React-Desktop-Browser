import React from 'react';

class TaskbarIcon extends React.Component {


    render() {

        let iconStyle = {
            padding: "10px 10px 10px 10px",
            fontFamily: "Courier New, monospace",
            fontSize: "12px",
            fontWeight: "600",
            color: "#3B3037"
        };

        return (
            <div style={iconStyle} onMouseDown={this.clicked}>
                <img src="/folder.png" alt="document"/>
            </div>
        );

    }
}

export default TaskbarIcon;