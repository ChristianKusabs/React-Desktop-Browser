import React from 'react';

import Icon from "./icon";

class Taskbar extends React.Component {

    render() {

        let inputStyle = {
            position: "absolute",
            width: "90%",
            height: "65px",
            backgroundColor: "rgba(230, 232, 234, 0.90)",
            position: "absolute",
            bottom: "10px",
            left: "5%",
            margin: "auto",
            borderRadius: "25px",
            //border: "20px",
            zIndex: 0
        };

        return <div style={inputStyle}>
        </div>

    }

}

export default Taskbar;