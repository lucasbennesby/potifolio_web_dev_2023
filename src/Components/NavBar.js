import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Buttons from "./Buttons";
import resume from "../Assets/resume2.pdf";
import Logo from "./Logo";

function NavBar() {
  const [toggle, setToggle] = useState("");
  const handleClassToggle = () => {
    if (toggle === "active") {
      setToggle("");
    } else {
      setToggle("active");
    }
  };
  return (
    <div className={styles.headerNav}>
      <ul className={styles.navUl}>
        <Link to={"/"}>
          <Logo />
        </Link>

        <div className={`${styles.mobileMenu} ${styles[toggle]}  `}>
          <li>
            <Link
              to="/"
              onClick={handleClassToggle}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projetos"
              onClick={handleClassToggle}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              to={"/sobre"}
              onClick={handleClassToggle}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to={"/contato"}
              onClick={handleClassToggle}
            >
              Contato
            </Link>
          </li>
          <div className={styles.resume}>
            <a
              href={resume}
              download
            >
              <Buttons>Curriculo</Buttons>
            </a>
          </div>
          <button
            className={`${styles.menuAnchor}`}
            onClick={handleClassToggle}
          ></button>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
