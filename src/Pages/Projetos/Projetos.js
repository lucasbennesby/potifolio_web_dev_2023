import React from "react";
import styles from "./Projetos.module.css";
import Card from "../../Components/Card";

import passwordProject from "../../Assets/passwordGenerator (1).png";
import nutriCalc from "../../Assets/nutriCalc (1).png";
import adviceGenerator from "../../Assets/AdviceGenerator.png";
import tipCalculator from "../../Assets/tipCalculator.png";
import rating from "../../Assets/rating.png";
import siteV1 from "../../Assets/home-site.png";
import siteV2 from "../../Assets/sitev2.png";
import expense from "../../Assets/expenseControl.png";
import calculator from "../../Assets/investmentCalculator.png";
function Projetos() {
  return (
    <table>
      <caption>Projetos - Projects</caption>

      <tbody
        colSpan="3"
        className={styles.table}
      >
        <tr>
          <td>
            <Card
              src={nutriCalc}
              desc="Projeto calculadora nutricionista, calcula IMC entre outros aspectos"
              link="https://nutricalc-mu.vercel.app/"
            />
          </td>
          <td>
            <Card
              src={passwordProject}
              desc="Projeto desafio do FrontEnd Mentor, consiste em um gerador de senhas"
              link="https://password-generator-vaue.vercel.app/"
            />
          </td>
          <td>
            <Card
              src={adviceGenerator}
              desc="Projeto desafio do FrontEnd Mentor, consiste em um gerador de conselhos aleatórios"
              link="https://front-end-challege-2.vercel.app/"
            />
          </td>
        </tr>
        <tr>
          <td>
            <Card
              src={tipCalculator}
              desc="Projeto desafio do FrontEnd Mentor, consiste em uma calculadora de gorjeta"
              link="https://front-end-challege-3-ten.vercel.app/"
            />
          </td>
          <td>
            <Card
              src={rating}
              desc="Projeto desafio do FrontEnd Mentor, consiste em um menu de avalição"
              link="https://front-end-challege1.vercel.app/"
            />
          </td>
          <td>
            <Card
              src={siteV1}
              desc="A primera versão do meu website"
              link="https://pagina-web-xi.vercel.app/#"
            />
          </td>
        </tr>
        <tr>
          <td>
            <Card
              src={siteV2}
              desc="A segunda versão do meu website"
              link="https://n1-prog-web.vercel.app/index.html"
            />
          </td>
          <td>
            <Card
              src={expense}
              desc="Projeto React para controle de desepesas"
            />
          </td>
          <td>
            <Card
              src={calculator}
              desc="Projeto React, calculadora de investimentos"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Projetos;
