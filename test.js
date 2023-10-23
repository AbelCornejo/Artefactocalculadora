// Importa Jasmine
var Jasmine = require('jasmine');
var jasmine = new Jasmine();

// Configura Jasmine para que busque archivos de pruebas en la carpeta 'spec'
jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: ['**/*[sS]pec.js']
});

// Ejecuta las pruebas
jasmine.execute();

// Asegúrate de que tus pruebas incluyan casos de prueba con errores intencionales