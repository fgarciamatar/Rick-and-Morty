import "./App.css";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import Title from "./components/Title/Title";
import axios from "axios";

import Nav from "./components/Nav/Nav";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (!characters.find(char => char.id === data.id)) {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }else{
          alert(`Ya se agrego el personaje con este ID: ${id}`)
        }
      }
    ).catch(() => window.alert("¡No hay personajes con este ID!"))
  }
  function onClose(id) {
    setCharacters(characters.filter(personaje => personaje.id !== Number(id)))
  }
  return (
    <div className="App">

      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Title/>}></Route>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} /> }> </Route>
        <Route path="/about" element={<About></About>}></Route>
      <Route path="/detail/:id" element={<Detail></Detail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
