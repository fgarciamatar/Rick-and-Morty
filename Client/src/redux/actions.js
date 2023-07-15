import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionTypes";

const URL = "http://localhost:3001/rickandmorty";
export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${URL}/fav`, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      alert("Error al Agregar un Favorito", error.message);
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${URL}/fav/${id}`);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log("Error al Eliminar un Favorito", error.message);
    }
  };
};

export const filterCard = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};
export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};
