import React, { ReactElement } from "react";

// for styles
import { styles } from "../styles/global";

// interface for component
interface IProps {
    title: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled: boolean;
}

function button(props: React.PropsWithChildren<IProps>): ReactElement {
    return (
        <button
            style={props.disabled ? styles.buttonDisabled : styles.button}
            onClick={e => props.onClick(e)}
            disabled={props.disabled}
        >
            <span style={styles.buttonTitle}>{(!props.disabled) ? props.title : 'Loading...'}</span>
        </button>
    );
}

export default button;
