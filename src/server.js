const express = require('express');
const app = express();

const port = 3000;
const host = "0.0.0.0";

const defaultRoutes = require('./routes/default-routes');
const usuariosRouter = require('./routes/usuarios-routes');

app.use('/', defaultRoutes);
app.use('/api/usuarios', usuariosRouter);

app.listen(port, host, () => {
  console.log(`Example app listening at http://${host}:${port}`)
})