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
    // Tu código existente aquí
    // Puede haber errores en esta sección
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } catch (error) {
    console.error('Error inesperado:', error);
    res.status(500).send('Ha ocurrido un error inesperado.');
    // Puedes detener el servidor si es necesario
    process.exit(1);
  }
});

// Puerto en el que se ejecutará el servidor
const port = process.env.PORT || 8091;

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor web escuchando en el puerto ${port}`);
});
