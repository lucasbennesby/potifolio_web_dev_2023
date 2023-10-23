import React, { useState, useEffect } from "react";
import styles from "./Contato.module.css";
import Buttons from "../../Components/Buttons";
import emailjs from "emailjs-com";

function Contato() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setuserMessage] = useState("");
  const [userPhone, setuserPhone] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  //validators
  const [nameValid, setNameValid] = useState();
  const [phoneValid, setPhoneValid] = useState();
  const [emailValid, setEmailValid] = useState();
  const [messageValid, setMessageValid] = useState();

  useEffect(() => {
    const setTime = setTimeout(() => {
      setFormIsValid(
        userName !== "" &&
          userEmail.includes("@") &&
          userMessage !== "" &&
          userPhone !== ""
      );
    }, 700);

    return () => {
      clearTimeout(setTime);
    };
  }, [userEmail, userName, userMessage, userPhone]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formIsValid) {
      emailjs
        .sendForm(
          "gmailMessage",
          "template_cyf3y7e",
          "form",
          "PBhcMMN-FwGUvoCpO"
        )
        .then(
          (result) => {
            alert("Email enviado com sucesso!");
          },
          (error) => {
            alert("Email nao enviado erro:" + error);
          }
        );
      setUserEmail("");
      setUserName("");
      setuserMessage("");
      setuserPhone("");
    }

    console.log(e.target);
  };
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setuserMessage(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setuserPhone(e.target.value);
  };
  // VALIDADORES
  const validateNameHandler = () => {
    setNameValid(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(userName));
  };
  const validatePhoneHandler = () => {
    setPhoneValid(/^[0-9]+$/.test(userPhone));
  };
  const validateEmailHandler = () => {
    setEmailValid(userEmail.includes("@"));
  };
  const validateMessageHandler = () => {
    setMessageValid(userMessage !== "");
  };

  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h1>Alguma duvida ou pedido?</h1>
        <h2>Entre em contato!</h2>
        <h3>
          Estou sempre aberto para dúvidas, perguntas ou apenas um oi. Farei meu
          melhor para retornar o contato o mais rápido possível!
        </h3>
      </div>
      <div className={styles.formWrapper}>
        <form id="form">
          <label htmlFor="nome">Nome</label>
          <input
            className={`${nameValid === false ? styles.invalid : ""}`}
            onBlur={validateNameHandler}
            onChange={handleNameChange}
            type="text"
            id="nome"
            name="name"
            value={userName == undefined ? null : userName}
          />
          <label htmlFor="phone">Telefone</label>
          <input
            className={`${phoneValid === false ? styles.invalid : ""}`}
            onBlur={validatePhoneHandler}
            onChange={handlePhoneChange}
            type="tel"
            placeholder="(XX) 9 XXXX-XXXX"
            id="phone"
            name="phone"
            value={userPhone == undefined ? null : userPhone}
          />

          <label htmlFor="email">E-mail</label>
          <input
            className={`${emailValid === false ? styles.invalid : ""}`}
            onBlur={validateEmailHandler}
            onChange={handleEmailChange}
            type="email"
            id="email"
            name="email"
            value={userEmail == undefined ? null : userEmail}
          />

          <label htmlFor="texto">Mensagem</label>
          <textarea
            className={`${messageValid === false ? styles.invalid : ""}`}
            onBlur={validateMessageHandler}
            onChange={handleMessageChange}
            id="texto"
            name="message"
            rows="4"
            cols="50"
            value={userMessage == undefined ? null : userMessage}
          ></textarea>

          <div className={styles.buttonContainer}>
            <Buttons
              type={"submit"}
              onClick={handleSubmit}
              disabled={!formIsValid}
            >
              Enviar
            </Buttons>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contato;
