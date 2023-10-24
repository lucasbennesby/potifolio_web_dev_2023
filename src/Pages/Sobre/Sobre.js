import React from "react";
import styles from "./Sobre.module.css";
import Logo from "../../Components/Logo";
import Modal from "../../Components/Modal";
function Sobre() {
  return (
    <div className={styles.text}>
      <p>Olá, me chamo Lucas Bennesby Lima e nasci em porto velho</p>
      <p>
        Desde criança sempre tive um lado criativo e curioso com eletrônicos
        mais aflorado, costumava desmontar brinquedos para saber como
        funcionavam. Na adolescência me sentia mais familiarizado com a área de
        exatas.
      </p>
      <p>
        Em 2018 ingressei na UFSC cursando Engenharia Ferroviária, onde descobri
        minha paixão por programação.
      </p>
      <p>
        Atualmente curso Sistemas de Informação e minha área de atuação
        preferida é o desenvolvimento, no momento de páginas web, como esta.
      </p>
      <Modal />
    </div>
  );
}

export default Sobre;
