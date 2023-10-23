// Importa las dependencias necesarias
const express = require('express');
const path = require('path');

// Crea una instancia de Express
const app = express();

// Configura la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public'));

// Define una ruta para cargar tu calculadora
app.get('/', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } catch (error) {
    console.error('Error al cargar la calculadora:', error);
    res.status(500).send('Error al cargar la calculadora. Por favor, inténtalo de nuevo más tarde.');
  }
});

// Agrega un manejador de errores global
app.use((err, req, res, next) => {
  console.error('Error no controlado:', err);
  res.status(500).send('Ha ocurrido un error inesperado en la calculadora.');
});

// Puerto en el que se ejecutará el servidor
const port = process.env.PORT || 8091;

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor web escuchando en el puerto ${port}`);
});