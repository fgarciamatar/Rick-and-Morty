import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionTypes";

export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
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
