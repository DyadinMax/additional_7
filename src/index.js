module.exports = function solveSudoku(matrix) {

  let unsolved = 1;

    function Check(compared, matrix, i, j) {

        let row = Math.floor(i / 3) * 3;
        let col = Math.floor(j / 3) * 3;
        for (let k = row; k < row + 3; k++)
            for (let n = col; n < col + 3; n++)
                if (compared == matrix[k][n]) return false;

        for (let k = 0; k < matrix[i].length; k++)
            if (compared == matrix[i][k]) return false;

        for (let k = 0; k < matrix.length; k++)
            if (compared == matrix[k][j]) return false;

        return true;
    }

    function RecSolve(matrix, index) {
        if (index > 80) {
            unsolved = 0;
            return;
        }
        let i = Math.floor(index / 9),
            j = index % 9;
        if (matrix[i][j] !== 0)
            return RecSolve(matrix, index + 1);


        for (let variant = 1; variant < 10; variant++) {
            if (Check(variant, matrix, i, j)) {
              matrix[i][j] = variant;
                RecSolve(matrix, index + 1);
            }
        }
        if (unsolved) matrix[i][j] = 0;
    }
    RecSolve(matrix, 0);
    return matrix;
}
