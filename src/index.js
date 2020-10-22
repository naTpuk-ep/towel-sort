
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return !matrix ? [] : matrix.map((arr, i) => i % 2 == 0 ? arr : arr.reverse()).flat();
}