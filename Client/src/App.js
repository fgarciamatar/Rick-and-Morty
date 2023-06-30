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
  //Funcionesclear

  const  onSearch =  async (id)  => {
    if (characters.find((char) => char.id == id)) {
     return  alert(`Ya se agrego el personaje con este ID: ${id}`);
    }else {
      try{
        const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
          setCharacters((oldChars) => [...oldChars, data]);
      }catch(error){
        alert(error.message)
      }
    }
      
  }

  function onClose(id) {
    setCharacters(
      characters.filter((personaje) => personaje.id !== Number(id))
    );
  }

  async function  login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty';
    try{
      const {data} = await axios(`${URL}/login?email=${email}&password=${password}`)
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
    }catch({response}){
      const { data } = response;
      alert(data.message);
    }
 }

  
  const getRandom = () => { //funcion para agregar personajes random
		const value = Math.floor(Math.random() * 827)
		onSearch(value)
		navigate('/home')
	}

  // Render

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch}  getRandom={getRandom}/>}
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
