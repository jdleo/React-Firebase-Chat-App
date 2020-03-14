import React, { ReactElement } from "react";

// for styles
import { styles } from "../styles/global";

// interface for component
interface IProps {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function button(props: React.PropsWithChildren<IProps>): ReactElement {
  return (
    <button style={styles.button} onClick={(e) => props.onClick(e)}>
      <span style={styles.buttonTitle}>{props.title}</span>
    </button>
  );
}

export default button;
