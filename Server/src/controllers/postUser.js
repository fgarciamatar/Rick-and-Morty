const { User } = require("../DB_connection")

module.exports =  async (req, res) => {
  
try {
    const {email, password} = req.body;
    console.log(req.body);
    if(!email || !password) res.status(400).send("Faltan Datos");   
    const user = await User.findOrCreate({where: {email, password}});
    return res.send(user);

} catch (error) {
    res.status(500).send(error.message);
}
}


