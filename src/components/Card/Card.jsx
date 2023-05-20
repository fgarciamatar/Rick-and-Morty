import style from "./Card.module.css"
import { Link } from "react-router-dom";
export default function Card({name,status,species,gender,origin,image,onClose,id}) {
   return (
      <div className= {style.tarjeta}>
         <button className={style.boton} onClick={()=> onClose(id)}>X</button>
         <img className={style.imagen} src={image} alt='' />
         <Link to={`/detail/${id}`}>
         <h2 className={style.nombre}>{name}</h2>
         </Link>
         {/* <h2 className={style.info}>{status}</h2>
         <h2 className={style.info}>{species}</h2>
         <h2 className={style.info}>{gender}</h2>
         <h2 className={style.info}>{origin}</h2> */}
        
      </div>
   );
}
