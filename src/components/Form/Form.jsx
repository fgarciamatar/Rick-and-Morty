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
    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email: </label>
        <input
          name="email"
          type="text"
          placeholder="Email..."
          className={style.input}
          value={userData.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>
        <br />
        <label htmlFor="">Password: </label>
        <input
          name="password"
          type="password"
          className={style.input}
          value={userData.password}
          onChange={handleChange}
        />
         <p>{errors.password}</p>
        <br />
        <button type="submit" className={style.boton}>Submit</button>
      </form>
    </div>
  );
}
