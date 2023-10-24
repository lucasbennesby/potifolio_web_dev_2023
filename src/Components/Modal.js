import React, { useState } from "react";
import styles from "./Modal.module.css";
import Buttons from "./Buttons";

function Modal() {
  const [modal, setModal] = useState(true);

  const handleClick = () => {
    setModal(false);
  };

  const handleModal = (
    <>
      <div className={styles.bgBlur} />
      <div className={styles.card}>
        <p>Email enviado com sucesso!</p>
        <Buttons onClick={handleClick}>Confirmar</Buttons>
      </div>
    </>
  );

  return <>{modal && handleModal}</>;
}

export default Modal;
