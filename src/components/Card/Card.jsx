import style from "./Card.module.css"
export default function Card({name,status,species,gender,origin,image,onClose,id}) {
   return (
      <div className= {style.tarjeta}>
         <button className={style.boton} onClick={onClose}>X</button>
         <img className={style.imagen} src={image} alt='' />
         <h2 className={style.nombre}>{name}</h2>
         <h2 className={style.info}>{status}</h2>
         <h2 className={style.info}>{species}</h2>
         <h2 className={style.info}>{gender}</h2>
         <h2 className={style.info}>{origin}</h2>
        
      </div>
   );
}
