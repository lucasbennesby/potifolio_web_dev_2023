import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Buttons from "./Buttons";
import logo from "../Assets/Lucas_Bennesby__7_-removebg-preview.png";
import resume from "../Assets/resume2.pdf";
import Logo from "./Logo";

function NavBar() {
  return (
    <div className={styles.headerNav}>
      <ul className={styles.navUl}>
        <Link to={"/"}>
          <Logo />
        </Link>

        <div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
          <li>
            <Link to={"/sobre"}>Sobre</Link>
          </li>
          <li>
            <Link to={"/contato"}>Contato</Link>
          </li>
          <div className={styles.resume}>
            <a
              href={resume}
              download
            >
              <Buttons>Curriculo</Buttons>
            </a>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
