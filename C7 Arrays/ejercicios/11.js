function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var resultado = [];
  for (var i = 0; i < array.length; i++) {
    resultado.push(array[i] * 2);
  }
  return resultado;
}

module.exports = duplicarElementos;
