import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../../Components/Buttons";
import styles from "./Home.module.css";
function Home() {
  return (
    <div>
      <div className={styles.container}>
        <h1>Oi meu nome é</h1>
        <h2>Lucas Bennesby Lima.</h2>
        <h3>Eu construo coisas para a Web.</h3>
        <p>
          Eu sou estudante de sistemas de informação com especialidade em
          desenvolvimento web. Atualmente estou focado em aperfeiçoar minhas
          habilidades de desenvolvedor e apreder mais!
        </p>

        <div className={styles.buttonContainer}>
          <Buttons>
            <Link
              className={styles.linkText}
              to="/projetos"
            >
              se liga nos meus projetos!
            </Link>
          </Buttons>
        </div>
      </div>
    </div>
  );
}

export default Home;
