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
  });
  