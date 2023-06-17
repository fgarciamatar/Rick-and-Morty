const http = require("http") ;
const data = require("./utils/data");
const { log } = require("console");


const PORT = 3001;


http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
  if(url.includes("/rickandmorty/character")){
    const id = url.split("/").at(-1);
    const character = data.find((character)=> character.id === Number(id));
    if(!character){
        res.writeHead(404, {"Content-Type": "application/json"});
        return res.end("Route  not  found");
    }
    res.writeHead(200, {"Content-Type": "application/json"});
    return res.end(JSON.stringify(character));
  }
}).listen(PORT, ()=>{
    console.log(`servidor en puerto ${PORT}`)
})