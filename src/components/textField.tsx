import React, { ReactElement } from "react";

// for styles
import { styles } from "../styles/global";

// interface for component
interface IProps {
  placeholder: string;
  value: string;
  type: string;
}

function textField(props: React.PropsWithChildren<IProps>): ReactElement {
  return (
    <input
      placeholder={props.placeholder}
      style={styles.input}
      value={props.value}
      type={props.type}
    />
  );
}

export default textField;
