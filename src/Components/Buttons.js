import React from "react";
import styles from "./Buttons.module.css";
function Buttons(props) {
  return (
    <button
      onClick={props.onClick}
      className={styles.Button}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Buttons;
