import style from "./SearchBar.module.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SearchBar({ onSearch, getRandom }) {
  const [id, setId] = useState("");
  const { pathname } = useLocation();

  function handleChange(event) {
    setId(event.target.value);
  }
  return (
    <div className={style.divInput}>
      <div className={style.container1}>
        {pathname === "/home" ? (
          <div>
            <input
              type="search"
              placeholder="  Agregar Personaje (ID)"
              className={style.input}
              onChange={handleChange}
              value={id}
            />
            <button className={style.button} onClick={() => onSearch(id)}>
              Agregar
            </button>
            <button
              className={style.button}
              onClick={() => {
                getRandom();
              }}
            >
              Random
            </button>
          </div>
        ) : (
          <div>
            <input type="search" className={style.inputOff} />
            <span className={style.botonOff}>Agregar</span>
            <button className={style.botonOff}>Random</button>
          </div>
        )}

        {pathname !== "/Favorites" ? (
          <Link to={"/Favorites"}>
            <button className={style.button}>Favoritos</button>
          </Link>
        ) : (
          <Link to={"/Favorites"}>
            <button className={style.botonActive}>Favoritos</button>
          </Link>
        )}
      </div>
      <div className={style.container1}>
        {pathname !== "/home" ? (
          <Link to={"/home"}>
            <button className={style.button}>Home</button>
          </Link>
        ) : (
          <Link to={"/home"}>
            <button className={style.botonActive}>Home</button>
          </Link>
        )}

        {pathname !== "/about" ? (
          <Link to={"/about"}>
            <button className={style.button}>About</button>
          </Link>
        ) : (
          <Link to={"/about"}>
            <button className={style.botonActive}>About</button>
          </Link>
        )}

        <Link to="/">
          <button className={style.button}>Log Out</button>
        </Link>
      </div>
    </div>
  );
}
