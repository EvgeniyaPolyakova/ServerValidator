const express = require("express");
const cors = require('cors');
const fetch=require('node-fetch')
const server = express();
server.use(express.json());



server.use(cors());

server.post("/", (req, response) => {
    console.log(req.body)
    fetch(req.body.url).then(res => res.text()).then((data) => console.log(data))
      
    
    .then(res=> response.send(res))
  });

  server.listen(3001, () => {
    console.log("server server");
  });