import React, { ReactElement } from "react";

// for styles
import { styles } from "../styles/global";

// interface for component
interface IProps {
  placeholder: string;
  value: string;
  type: string;
  style: { [key: string]: any };
  onBlur: () => void;
  onFocus: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function textField(props: React.PropsWithChildren<IProps>): ReactElement {
  return (
    <input
      placeholder={props.placeholder}
      style={props.style}
      value={props.value}
      type={props.type}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      onChange={(e) => props.onChange(e)}
    />
  );
}

export default textField;
