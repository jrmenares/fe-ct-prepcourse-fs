function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var producto = 1;
  var inicio = Math.min(a, b);
  var fin = Math.max(a, b);
  for (var i = inicio; i <= fin; i++) {
    producto = producto * i;
  }
  if (producto === -0) {
      producto = 0;
  }
  return (producto);
}

module.exports = productoEntreNúmeros;