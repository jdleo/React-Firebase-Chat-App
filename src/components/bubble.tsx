import React, { ReactElement } from "react";

// for styles
import { styles } from "../styles/global";

// interface for component
interface IProps {
    color: string;
    textColor: string;
    sender: string;
    alignment:
        | "-moz-initial"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "center"
        | "end"
        | "justify"
        | "left"
        | "match-parent"
        | "right"
        | "start"
        | undefined;
}

function bubble(props: React.PropsWithChildren<IProps>): ReactElement {
    return (
        <div style={{ ...styles.bubbleContainer, float: props.alignment }}>
            <p style={{ marginLeft: 10, marginBottom: 0 }}>{props.sender}</p>
            <div
                style={{
                    ...styles.bubble,
                    backgroundColor: props.color
                }}
            >
                <p style={{ color: props.textColor, textAlign: "left" }}>
                    {props.children}
                </p>
            </div>
        </div>
    );
}

export default bubble;
