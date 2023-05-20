import style from "./SearchBar.module.css";
import { useState } from "react";
import {Link} from"react-router-dom";
export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  function handleChange(event){
    setId(event.target.value)
  }
  return (
    <>
    <div className={style.divInput}>
      <input
        type="search"
        placeholder="Buscar/Agregar Personaje"
        className={style.input}
        onChange={handleChange}
        value={id}
      />
      <button className={style.button} onClick={()=> onSearch(id)}>
        Agregar
      </button>
      <Link to={"/home"}><button className={style.button}>Home</button></Link>
      <Link to={"/about"}><button className={style.button}>About</button></Link>
    </div>
    </>
  );
}
