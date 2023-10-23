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
