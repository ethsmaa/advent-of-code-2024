import { describe, it, expect } from "vitest";
import { parseInput, calculateDistance, solve } from "../day-1/index.js";

describe("Advent of Code - Day 1", () => {
  it("parseInput", () => {
    const input = `5 7
    1 9
    2 4`;
    const expected = [
      [5, 1, 2],
      [7, 9, 4],
    ];
    expect(parseInput(input)).toEqual(expected);
  });

  it("calculateDistance", () => {
    const fList = [5, 1, 2]; // 4 - 1 = 3, 7-2 = 5, 9-5 = 4
    const sList = [7, 9, 4];
    const expected = 12; // 3 + 5 + 4 = 12
    expect(calculateDistance(fList, sList)).toBe(expected);
  });

  it("solve", () => {
    const input = `5 7
    1 9
    2 4`;
    const expected = 12;
    expect(solve(input)).toBe(expected);
  });
});
