function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var count = 0
  for (i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      count++;
    }
  }
  return count;
}

module.exports = contarElementosMayoresA10;
