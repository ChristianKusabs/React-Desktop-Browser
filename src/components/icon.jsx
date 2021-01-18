import React from 'react';

class Icon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            text: props.text,
            path: props.path,
            type: props.type
        }
    }

    clicked = (e) => {

        this.setState({ clicks: this.state.clicks + 1 });

        if (this.state.clicks > 0) {
            this.props.navigate(this.props.path + this.state.text, this.state.type);
        }
        
    }

    render() {

        let iconStyle = {
            padding: "10px 10px 10px 10px",
            fontFamily: "Courier New, monospace",
            fontSize: "12px",
            fontWeight: "600",
            color: "#3B3037"
        };

        let textStyle = {
            margin: "4px 0px 0px 0px"
        };

        return (
            
            <div style={iconStyle} onMouseDown={this.clicked}>
                <img src={this.props.image} alt="document"/>
                <p style={textStyle}>{this.state.text}</p>
            </div>
        );
    }

}

export default Icon;
