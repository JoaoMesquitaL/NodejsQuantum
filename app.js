const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get("/", (req, res) => {
  res.json({message: 'Olá Mundo!'})
})

app.post("/submit", (req, res) =>{
const {name, age} = req.body;

  res.json({message: `meu nome é ${name} tenho ${age} anos`});
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})