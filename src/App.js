import "./App.css";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites"
import axios from "axios";

import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  // Hooks
  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //credencial fake
  const email = "fgarciamatar@gmail.com";
  const password = "henry123";

  //Funciones

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (!characters.find((char) => char.id === data.id)) {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        } else {
          alert(`Ya se agrego el personaje con este ID: ${id}`);
        }
      })
      .catch(() => window.alert("¡No hay personajes con este ID!"));
  }

  function onClose(id) {
    setCharacters(
      characters.filter((personaje) => personaje.id !== Number(id))
    );
  }

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales Incorrectas");
    }
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  }
  // Render

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login}></Form>}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        >
          {" "}
        </Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/favorites" element={<Favorites></Favorites>}></Route>
        <Route path="/detail/:id" element={<Detail></Detail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
