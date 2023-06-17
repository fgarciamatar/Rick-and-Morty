import React from 'react'
import style from "./About.module.css"
import miImagen from "../../imagenes/about.png"

export default function About() {
  return (
   
    <div className={style.container}>
       <div className={style.containerImagen}>
       <img className={style.imagen} src={miImagen} alt="FOTO DE FRANCISCO" />
      <h1 className={style.nombre}>Francisco Garcia Matar</h1>
      </div>
      <div className={style.containerTexto}>
            <h4 className={style.info}>Status: Vivito y coleando</h4>
            <h4 className={style.info}>Specie: Programmer</h4>
            <h4 className={style.info}>Origin: TucumanLandia</h4>
            <h4 className={style.info}>Gender: Male</h4>
          </div>
    </div>
    
  )
}
