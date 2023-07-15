import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";

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

  const  onClose = (id) => {
    setCharacters(
      characters.filter((personaje) => personaje.id !== id)
    );
  }

  const login = async (userData) => {
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

 const loginAsGuest = () => {
  setAccess(true);
  navigate("/home");
};

  
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
        <Route path="/"  element={<Form login={login} loginAsGuest={loginAsGuest} />}></Route>
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
