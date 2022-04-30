function determinant(matrix) {
  if (matrix.length == 1) return matrix[0][0];
  if (matrix.length == 2)
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

  let output = 0;

  for (let i = 0; i < matrix.length; i++) {
    let array = matrix
      .slice(1)
      .map((row) => [...row].filter((value, index) => index !== i));
      
    //TODO console.log(array);
    //TODO console.log(matrix);
    
    if (i % 2 === 0) {
      output += matrix[0][i] * determinant(array);
    } else output += -1 * matrix[0][i] * determinant(array);
  }
  return output;
}

console.log(
  determinant([
    [2, 4, 2],
    [3, 1, 1],
    [1, 2, 0],
  ])
);

// *             00 01 02
// *             10 11 12
// *             20 21 22
