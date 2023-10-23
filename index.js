// Importa las dependencias necesarias
const express = require('express');
const path = require('path');

// Crea una instancia de Express
const app = express();

// Configura la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Define una ruta para cargar tu calculadora
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Puerto en el que se ejecutará el servidor
const port = process.env.PORT || 8091;

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor web escuchando en el puerto ${port}`);
});
