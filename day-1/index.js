import { input } from "./input.js";

export const parseInput = (input) => {
  return input
    .split("\n")
    .map((line) => line.split(" ").filter(Boolean).map(Number))
    .reduce(
      ([fList, sList], [f, s]) => [
        [...fList, f],
        [...sList, s],
      ],
      [[], []]
    );
};

export const calculateDistance = (fList, sList) => {
  const distances = [];
  while (fList.length && sList.length) {
    const minF = Math.min(...fList);
    const minS = Math.min(...sList);

    distances.push(Math.abs(minF - minS));

    fList.splice(fList.indexOf(minF), 1);
    sList.splice(sList.indexOf(minS), 1);
  }
  return distances.reduce((sum, distance) => sum + distance, 0);
};

export const solve = (input) => {
  const [fList, sList] = parseInput(input);
  return calculateDistance(fList, sList);
};

console.log(solve(input));
