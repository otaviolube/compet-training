const express = require('express');
const app = express();

const { soma, multiplicacao } = require('./operacoes');

console.log(soma(10,20));
console.log(multiplicacao(10,20));

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})