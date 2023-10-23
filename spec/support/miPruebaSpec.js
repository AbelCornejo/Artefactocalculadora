describe('Mi prueba', function() {
    it('debería sumar dos números', function() {
      var resultado = sumar(2, 3);
      expect(resultado).toBe(5);
    });
  
    it('debería restar dos números', function() {
      var resultado = restar(5, 2);
      expect(resultado).toBe(3);
    });
  });
  