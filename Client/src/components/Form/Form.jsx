import React from "react";
import image from "../../imagenes/login.png";
import validation from "./validation";
import style from "../../components/Form/Form.module.css";
import { useState } from "react";

export default function Form({ login, loginAsGuest}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    setErrors(validation({ ...userData, [property]: value }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   login(userData);
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.nativeEvent.submitter.name === "loginButton"
      ? login(userData)
      : console.log(loginAsGuest());
  };
  return (
    <div className={style.container}>
      <div className={style.Title}>
      <img className={style.Image} src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png" alt="." />
    </div>
  
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email" className={style.containerInput}>
          Email:
          <input
            className={style.input}
            name="email"
            type="text"
            placeholder="Email..."
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <p className={style.error}>{errors.email}</p>
        <br />

        <label htmlFor="password" className={style.containerInput}>
          Password:
          <input
            className={style.input}
            name="password"
            type="password"
            placeholder="Contraseña..."
            value={userData.password}
            onChange={handleChange}
          />
        </label>
        <p className={style.error}>{errors.password}</p>
        <br />
        <button className={style.boton} name="loginButton">
            Ingresar
          </button>
          <button className={style.boton} name="loginAsGuestButton">
            Ingresar como invitado
          </button>
        <button  className={style.boton}>
          Registrarme
        </button>
      </form>
    </div>
  );
}
