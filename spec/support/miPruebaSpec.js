describe("Mi prueba", function() {
  it("debería sumar dos números", function() {
    // Definir la función sumar
    function sumar(a, b) {
      return a + b;
    }

    // Realizar una expectativa
    expect(sumar(2, 3)).toBe(5);
  });

  it("debería restar dos números", function() {
    // Definir la función restar
    function restar(a, b) {
      return a - b;
    }

    // Realizar una expectativa
    expect(restar(5, 2)).toBe(3);
  });

  it("debería generar un error si se le pasa una cadena", function() {
    // Definir la función que generará un error
    function funcionConError() {
      throw new Error('Este es un error intencional.');
    }

    // Realizar una expectativa para verificar que la función genere un error
    expect(funcionConError).toThrowError('Este es un error intencional.');
  });
});
