function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var suma = resultadosTest.reduce(function(num1, num2) {
    return num1 + num2;
  });
  var promedio = suma /resultadosTest.length; {
    return promedio;
  }
}

module.exports = promedioResultadosTest;
