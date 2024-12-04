import { input } from "./input.js";

// PART-1
// igrenc cozdum... ozur dilerim
export function findXmas(input) {
  let count = 0;
  const rows = input.split("\n");
  const cols = rows[0].length;
  const rowsLength = rows.length;

  for (let i = 0; i < rowsLength; i++) {
    for (let j = 0; j < cols; j++) {
      // xmas (duz)
      if (
        j + 3 < cols &&
        rows[i][j] === "X" &&
        rows[i][j + 1] === "M" &&
        rows[i][j + 2] === "A" &&
        rows[i][j + 3] === "S"
      ) {
        count++;
      }

      // samx (ters)
      if (
        j - 3 >= 0 &&
        rows[i][j] === "X" &&
        rows[i][j - 1] === "M" &&
        rows[i][j - 2] === "A" &&
        rows[i][j - 3] === "S"
      ) {
        count++;
      }

    
      if (
        i + 3 < rowsLength &&
        rows[i][j] === "X" &&
        rows[i + 1][j] === "M" &&
        rows[i + 2][j] === "A" &&
        rows[i + 3][j] === "S"
      ) {
        count++;
      }


      if (
        i - 3 >= 0 &&
        rows[i][j] === "X" &&
        rows[i - 1][j] === "M" &&
        rows[i - 2][j] === "A" &&
        rows[i - 3][j] === "S"
      ) {
        count++;
      }

      //soldan saga duz capraz
      if (
        i + 3 < rowsLength &&
        j + 3 < cols &&
        rows[i][j] === "X" &&
        rows[i + 1][j + 1] === "M" &&
        rows[i + 2][j + 2] === "A" &&
        rows[i + 3][j + 3] === "S"
      ) {
        count++;
      }

      //sagdan sola duz capraz
      if (
        i + 3 < rowsLength &&
        j - 3 >= 0 &&
        rows[i][j] === "X" &&
        rows[i + 1][j - 1] === "M" &&
        rows[i + 2][j - 2] === "A" &&
        rows[i + 3][j - 3] === "S"
      ) {
        count++;
      }

      //soldan saga ters capraz
      if (
        i - 3 >= 0 &&
        j + 3 < cols &&
        rows[i][j] === "X" &&
        rows[i - 1][j + 1] === "M" &&
        rows[i - 2][j + 2] === "A" &&
        rows[i - 3][j + 3] === "S"
      ) {
        count++;
      }

      //sagdan sola ters capraz
      if (
        i - 3 >= 0 &&
        j - 3 >= 0 &&
        rows[i][j] === "X" &&
        rows[i - 1][j - 1] === "M" &&
        rows[i - 2][j - 2] === "A" &&
        rows[i - 3][j - 3] === "S"
      ) {
        count++;
      }
    }
  }

  return count;
}
console.log(findXmas(input));




// PART-2
export function findx_mas(input) {
  let count = 0;
  const rows = input.split("\n");
  const cols = rows[0].length;
  const rowsLength = rows.length;

  function isValidX(i, j, topLeft, topRight, bottomLeft, bottomRight) {
    return (
      rows[i - 1][j - 1] === topLeft &&
      rows[i - 1][j + 1] === topRight &&
      rows[i][j] === "A" &&
      rows[i + 1][j - 1] === bottomLeft &&
      rows[i + 1][j + 1] === bottomRight
    );
  }

  for (let i = 1; i < rowsLength - 1; i++) {
    for (let j = 1; j < cols - 1; j++) {
      // "X-MAS" kontrolü için 4 olası kombinasyonu kontrol ediyoruz:
      if (
        isValidX(i, j, "M", "M", "S", "S") || // Üst sol: M, Üst sağ: S, Alt sol: S, Alt sağ: M
        isValidX(i, j, "M", "S", "M", "S") || // Üst sol: S, Üst sağ: M, Alt sol: M, Alt sağ: S
        isValidX(i, j, "S", "M", "S", "M") || // Üst sol: S, Üst sağ: S, Alt sol: M, Alt sağ: M
        isValidX(i, j, "S", "S", "M", "M") // Üst sol: M, Üst sağ: M, Alt sol: S, Alt sağ: S
      ) {
        count++;
      }
    }
  }

  return count;
}
console.log(findx_mas(input));
