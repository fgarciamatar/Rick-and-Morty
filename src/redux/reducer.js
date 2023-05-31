import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionTypes";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.allCharacters, action.payload],
      };
    case REMOVE_FAV:
      const filtered = state.myFavorites.filter(
        (character) => character.id != action.payload
      );
      return {
        ...state,
        myFavorites: filtered,
      };
    case FILTER:
      const personajes = state.allCharacters.filter(
        (personaje) => personaje.gender === action.payload
      );
      return action.payload === "allCharacters"
        ? { ...state, myFavorites: [...state.allCharacters] }
        : {
            ...state,
            myFavorites: personajes,
          };

    case ORDER:
      const char = state.allCharacters;
      const order = char.sort((a, b) => {
        if (action.payload === "A") return a.id - b.id;
        else if (action.payload === "D") return b.id - a.id;
        else return 0;
      });
      return {
        ...state,
        myFavorites: order,
      };

    default:
      return { ...state };
  }
};
export default reducer;
