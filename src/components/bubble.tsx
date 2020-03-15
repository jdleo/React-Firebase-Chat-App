import React, { ReactElement } from "react";

// for styles
import { styles } from "../styles/global";

// interface for component
interface IProps {
    color: string;
    textColor: string;
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
        <div style={{ ...styles.bubble, backgroundColor: props.color, float: props.alignment}}>
            <p style={{ color: props.textColor, textAlign: "left" }}>
                {props.children}
            </p>
        </div>
    );
}

export default bubble;
