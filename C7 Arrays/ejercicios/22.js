function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var resultadoTabla =[];
  for (i = 0; i <= 10; i++) {
    resultadoTabla.push(i * 6);
  }
  return resultadoTabla
}

module.exports = tablaDelSeis;
