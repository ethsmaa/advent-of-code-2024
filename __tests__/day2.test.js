import { describe, it, expect } from "vitest";
import { parse, isSafe, canBeSafeWithOneRemoval, solvePart1, solvePart2 } from "../day-2/index.js";

describe("Advent of Code - Day 2", () => {
  it("parse", () => {
    const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

    const expected = [
      [7, 6, 4, 2, 1],
      [1, 2, 7, 8, 9],
      [9, 7, 6, 2, 1],
      [1, 3, 2, 4, 5],
      [8, 6, 4, 4, 1],
      [1, 3, 6, 7, 9],
    ];
    expect(parse(input)).toEqual(expected);
  });

  it("isSafe", () => {
    const safeArray = [7, 6, 4, 2, 1]; // desc
    const unsafeArray = [1, 2, 7, 4, 5]; // not sorted
    expect(isSafe(safeArray)).toBe(true);
    expect(isSafe(unsafeArray)).toBe(false);
  });

  it("canBeSafeWithOneRemoval", () => {
    const removableSafeArray = [1, 3, 2, 4, 5]; // 2 kaldirilirsa safe 
    const notRemovableArray = [1, 2, 7, 8, 9]; // cannot be safe
    expect(canBeSafeWithOneRemoval(removableSafeArray)).toBe(true);
    expect(canBeSafeWithOneRemoval(notRemovableArray)).toBe(false);
  });

  it("solvePart1", () => {
    const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

    const expected = 2; // safe rows: [7,6,4,2,1], [1,3,6,7,9]
    expect(solvePart1(input)).toBe(expected);
  });

  it("solvePart2", () => {
    const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

    const expected = 4; // rows safe with one removal: [1,3,2,4,5], [8,6,4,4,1] + 2 tane daha
    expect(solvePart2(input)).toBe(expected);
  });
});
