import React from 'react';

import Icon from "./icon";

class FinderWindow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            processID: props.processID,
            currentIcons: [
                {
                    id: "0",
                    path: "/",
                    text: "documents",
                    type: "folder",
                    image: "/document.png"
                }
            ],
            currentPath: props.currentPath
        }
    }

    navigate = (path, type) => {

        if (type === "folder") {
            alert("folder: " + path);
        }

    }

    render() {
        let inputStyle = {
            height: "100%",
            color: "white",
            //backgroundColor: "#746C70",
            backgroundColor: "rgba(255, 255, 255, 0.90)",
            backdropFilter: "blur(6px)",
            padding: "5px 10px 5px 7px",
            fontFamily: "Courier New, monospace",
            fontSize: "12px"
        };

        return (
            <div style={inputStyle}>
                <table>
                    <tbody>
                        <tr>
                            {this.state.currentIcons.map((t, i) =>
                                <td key={i}><Icon
                                    navigate={this.navigate}
                                    key={t.id}
                                    path={t.path}
                                    text={t.text}
                                    type={t.type}
                                    image={t.image}
                                /></td>
                                )
                    
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FinderWindow;