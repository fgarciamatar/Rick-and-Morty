import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css"

function Favorites({ myFavorites }) {
  return (
    <div className={style.container}>
      {myFavorites?.map(
        ({ name, status, species, gender, origin, image, id, onClose }) => (
          <Card  key={id}
          id={id}
          name={name}
          status={status}
          species={species}
          gender={gender}
          image={image}
          origin={origin.name}
          onClose={onClose}
          />
        )
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
