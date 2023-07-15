
const axios = require("axios");
const errorHandler = require("../error")
const URL = `https://rickandmortyapi.com/api/character`;

const getCharById = async (req, res) => {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}/${id}`)
   try {
    const {name, status, species, gender, origin, image} = data;
    const character = {id, name, status, species, gender, origin, image}
    return character.name ? res.status(200).json(character) : res.status(404).send("Not found")
   }catch(error){
    errorHandler(res, error);
   }
}


module.exports = getCharById;