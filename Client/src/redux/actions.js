import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionTypes";

export const addFav = (payload) => {
  const URL = 'http://localhost:3001/rickandmorty';
  return (dispatch) => {
     axios.post(`${URL}/fav`, payload).then(({ data }) => {
        return dispatch({
           type: ADD_FAV,
           payload: data,
        });
     });
  };
};

export const removeFav = (id) => {
  return function(dispatch){
    axios.delete(`${URL}/${id}`)
    .then(({data})=>{
      return dispatch({
        type: REMOVE_FAV,
        payload: data
      })
    })
  }
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
