const express = require('express');
const path = require('path');
const morgan = require('morgan');
const ejs = require('ejs');

const app = express();

const Home = require('./routes/Home');
const Math = require('./routes/Math');
const Users = require('./routes/user');

//Settings:
app.set('port', 3000);
app.set('app_name', 'Practicas');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares:
app.use(express.text());
app.use(express.json());
app.use(morgan("dev"));

const localhost = '127.0.0.1';
app.use(Math);
app.use(Home);
app.use(Users);

//Carpeta statica.
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  res.status(400).send("Pagina no encontrada.")
});

//Configuración del puerto en el que escucha:
app.listen(app.get('port'), localhost, function () {
  console.log(`Server run on port http://${localhost}:${app.get('port')}/`);
});
