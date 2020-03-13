import React, { ReactElement } from "react";

// for styles
import { styles } from "../styles/global";

// interface for component
interface IProps {
  title: string;
}

function button(props: React.PropsWithChildren<IProps>): ReactElement {
  return (
    <button style={styles.button}>
      <span style={styles.buttonTitle}>{props.title}</span>
    </button>
  );
}

export default button;
