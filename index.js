const express = require('express');
const path = require('path');
const app = express();

// Variable para controlar el estado de la calculadora
let calculatorStatus = 'active';

// Configura la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Define una ruta para cargar tu calculadora
app.get('/', (req, res) => {
  if (calculatorStatus === 'active') {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } else {
    res.status(503).send('La calculadora no está disponible debido a problemas en Jenkins.');
  }
});

// Esta ruta permite a Jenkins cambiar el estado de la calculadora
app.post('/setStatus', (req, res) => {
  const newStatus = req.body.status; // Debes definir la estructura de datos que esperas
  calculatorStatus = newStatus;
  res.sendStatus(200);
});

// Manejo de errores no controlados
app.use((err, req, res, next) => {
  console.error('Error no controlado:', err);
  res.status(500).send('Ha ocurrido un error inesperado en la calculadora.');
});

const port = process.env.PORT || 8091;

// Inicia el servidor
app.listenxxxxxxxxxxxxx(port, () => {
  console.log(`Servidor web escuchando en el puerto ${port}`);
});
