import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css"
import {filterCard, orderCards} from "../../redux/actions"
import { useDispatch } from "react-redux";
import { useState } from "react";

function Favorites({ myFavorites }) {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  
  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  }
  const handleFilter = (e) => {
    dispatch(filterCard(e.target.value));
  }
  return (
    <div className={style.container}>
       <select onChange={handleOrder}  name="Order" >
        <option value="A">Ascendente</option>
        <option  value="D">Descendente</option>
      </select>
      <select onChange={handleFilter} name="Filter">
        <option  value="Male">Male</option>
        <option  value="Female">Female</option>
        <option  value="Genderless">Genderless</option>
        <option  value="unknown">unknown</option>
        <option  value="allCharacters">all Characters</option>
      </select>
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
