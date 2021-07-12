const express = require("express");
const cors = require('cors');

const server = express();
server.use(express.json());

server.listen(3001, () => {
  console.log("server server");
});

server.use(cors());

server.get("/", (req, res) => {
    const { body } = req;
    fetch(req.body).then(res=>res.send(res))
  });