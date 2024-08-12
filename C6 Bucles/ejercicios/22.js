function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var limite = 0
  do {
    num = num + 5;
    limite = limite + 1
  } while (limite < 8) {
    return (num);
  }
}

module.exports = doWhile;