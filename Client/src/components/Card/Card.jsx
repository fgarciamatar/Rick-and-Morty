import style from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  id,
  removeFav,
  addFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  const nameFit = name.length > 12 ? `${name.substring(0, 12)}...` : name;
  const { pathname } = useLocation();
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
        <button className={style.fav} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={style.fav} onClick={handleFavorite}>
          🤍
        </button>
      )}
      {pathname !== "/Favorites" ? (
        <button className={style.boton} onClick={() => onClose(id)}>
          X
        </button>
      ) : (
        <button className={style.disabledBtn}>X</button>
      )}

      <img className={style.imagen} src={image} alt="" />
      <Link className={style.linkNombre} to={`/detail/${id}`}>
        <h2 className={style.nombre}>{nameFit}</h2>
      </Link>
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
