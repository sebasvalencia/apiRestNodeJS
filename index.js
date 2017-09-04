'use strict'

//importar Express
const express = require('express');

//Crear servidor
const app = express();

app.listen(3000,
  ()=> {
    console.log("API REST corriendo en http://localhost:3000");
  });
