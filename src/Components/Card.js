import React from "react";
import styles from "./Card.module.css";
import Buttons from "./Buttons";

function Card(props) {
  return (
    <div className={styles.card}>
      <img
        src={props.src}
        alt=""
      />
      <p>{props.desc}</p>

      <a
        target="_blank"
        href={props.link}
      >
        Ir para projeto
      </a>
    </div>
  );
}

export default Card;
