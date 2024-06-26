require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config.js');

const app = express();

// Configurar CORS
app.use(cors());

// Conectamos con la DB
dbConnection();

// Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    });
});

app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo en puerto " + process.env.PORT);
});