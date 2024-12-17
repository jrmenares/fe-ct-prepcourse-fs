function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else {
      return a.toString().localeCompare(b.toString());
    }
  });
}

module.exports = ordenarArray;
