import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
export default function Detail() {
  let { id } = useParams();
  const [characterDetail, setCharacterDetail] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacterDetail(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacterDetail({});
  }, [id]);

  return (
    <div>
      {characterDetail ? (
        <div className="divContainer">
        <div className={style.container}>
          <div className={style.containerImagen}>
            <img className={style.imagen} src={characterDetail.image} alt="" />
            <h2 className={style.nombre}>{characterDetail.name}</h2>
          </div>
          <div className={style.containerTexto}>
            <h4 className={style.info}>Status: {characterDetail.status}</h4>
            <h4 className={style.info}>Specie: {characterDetail.species}</h4>
            <h4 className={style.info}>Origin: {characterDetail.origin?.name}</h4>
            <h4 className={style.info}>Type: {characterDetail.type}</h4>
          </div>
        </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
