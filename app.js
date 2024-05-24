const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importa cors
const usuarios = require('./routes/usuarios');
const cursos = require('./routes/cursos');

// Conectar a la BD
mongoose.connect('mongodb://localhost:27017/apiPrueba', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB...'))
    .catch(err => console.log('No se pudo conectar con MongoDB..', err));

const app = express();
const port = process.env.PORT || 3000;

// Configurar CORS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/usuarios', usuarios);
app.use('/api/cursos', cursos);

app.listen(port, () => {
    console.log(`API RESTFul Ok, y ejecutándose en el puerto ${port}`);
});
