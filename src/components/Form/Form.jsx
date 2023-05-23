import React from "react";
import Title from "../../components/Form/Form";
import validation from "./validation";
import style from "../../components/Form/Form.module.css";
import { useState } from "react";
export default function Form({ login }) {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  return (
    <div className={style.container}>
      {/* <img src="https://w7.pngwing.com/pngs/530/120/png-transparent-rick-sanchez-from-rick-and-morty-rick-sanchez-television-show-animation-rick-and-morty-television-child-food.png" /> */}
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
            value={userData.password}
            onChange={handleChange}
          />
        </label>
        <p className={style.error}>{errors.password}</p>
        <br />

        <button type="submit" className={style.boton}>
          Submit
        </button>
      </form>
    </div>
  );
}
