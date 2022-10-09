
public class SudokuSolver {

    public static void main(String[] args) {

        // initial board '0' indicates postion is empty
        int[][] sudoku = {
                { 5, 3, 0, 0, 7, 0, 0, 0, 0 },
                { 6, 0, 0, 1, 9, 5, 0, 0, 0 },
                { 0, 9, 8, 0, 0, 0, 0, 6, 0 },
                { 8, 0, 0, 0, 6, 0, 0, 0, 3 },
                { 4, 0, 0, 8, 0, 3, 0, 0, 1 },
                { 7, 0, 0, 0, 2, 0, 0, 0, 6 },
                { 0, 6, 0, 0, 0, 0, 2, 8, 0 },
                { 0, 0, 0, 4, 1, 9, 0, 0, 5 },
                { 0, 0, 0, 0, 8, 0, 0, 7, 9 }

        };

        solveSudoku(sudoku);

    }

    private static void solveSudoku(int[][] sudoku) {
        // a function that solves the given sudoku board
        // call to the helper function that solves the sudoku using backtracking
        solve(sudoku, 0, 0);

    }

    private static void solve(int[][] sudoku, int x, int y) {

        if (x == 9 && y == 0) {
            // base condition if we reach the end of board that means we solved it
            // successfully not print the results
            for (int i = 0; i < 9; i++) {
                for (int j = 0; j < 9; j++) {
                    System.out.print(sudoku[i][j] + " ");
                }
                System.out.println();
            }
            return;
        }

        int nextX, nextY;
        // compute the next coordinates on which we will call the solve function
        if (y == sudoku[0].length - 1) {
            nextX = x + 1;
            nextY = 0;
        } else {
            nextX = x;
            nextY = y + 1;
        }

        if (sudoku[x][y] == 0) {
            // if the current cell is empty initially try to place all options from 1 to 9
            // ans select the one from which board can be solved
            for (int i = 1; i <= 9; i++) {
                if (isSafe(i, x, y, sudoku)) {
                    sudoku[x][y] = i;
                    solve(sudoku, nextX, nextY);
                    sudoku[x][y] = 0;
                }
            }
        } else {
            solve(sudoku, nextX, nextY);
        }
    }

    private static boolean isSafe(int option, int i, int j, int[][] sudoku) {
        // checks if the number 'option' can be placed on the sudoku board at position
        // (i,j)

        // check for occurance of the number in same row
        for (int k = 0; k < 9; k++) {
            if (sudoku[i][k] == option)
                return false;
        }

        // check for occurance of the number in same column
        for (int k = 0; k < 9; k++) {
            if (sudoku[k][j] == option)
                return false;
        }

        // check for occurance of the number in same 3x3 grid
        int rowStart = (i / 3) * 3;
        int colStart = (j / 3) * 3;

        for (int row = 0; row < 3; row++) {
            for (int col = 0; col < 3; col++) {
                if (sudoku[rowStart + row][colStart + col] == option)
                    return false;
            }
        }

        return true;
    }

}
