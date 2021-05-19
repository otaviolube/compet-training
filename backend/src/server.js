require('dotenv').config({
  path: process.env.NODE_ENV === "development" ? ".env.development" : ".env"
});

console.log(process.env.NODE_ENV);

const express = require('express');
const app = express();

const port = process.env.APP_PORT;
const host = process.env.APP_HOSTNAME;

app.use(express.urlencoded({
  extended: true
})); 

app.use(express.json());

const defaultRoutes = require('./routes/default-routes');
const usuariosRouter = require('./routes/usuarios-routes');

app.use('/', defaultRoutes);
app.use('/api/usuarios', usuariosRouter);

app.listen(port, host, () => {
  console.log(`Example app listening at http://${host}:${port}`)
})