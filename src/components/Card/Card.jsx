import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";


function Card({ name, status, species, gender, origin, image, onClose, id, removeFav, addFav, myFavorites }) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        name,
        status,
        species,
        gender,
        origin,
        image,
        onClose,
        id,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  return (
    <div className={style.tarjeta}>
      {isFav ? (
        <button  className={style.fav} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={style.fav} onClick={handleFavorite}>🤍</button>
      )}
      <button className={style.boton} onClick={() => onClose(id)}>
        X
      </button>
      <img className={style.imagen} src={image} alt="" />
      <Link className={style.linkNombre}to={`/detail/${id}`}>
        <h2 className={style.nombre}>{name}</h2>
      </Link>
      {/* <h2 className={style.info}>{status}</h2>
         <h2 className={style.info}>{species}</h2>
         <h2 className={style.info}>{gender}</h2>
         <h2 className={style.info}>{origin}</h2> */}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
