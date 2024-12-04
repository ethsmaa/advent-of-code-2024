import { findXmas, findx_mas } from "../day-4/index.js";
import { describe, it, expect } from "vitest";

describe("Advent of Code - Day 4", () => {
  const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

  it("test case 1", () => {
    const expected = 18;
    expect(findXmas(input)).toBe(expected);
  });

  it("test case 2", () => {
    const expected = 9;
    expect(findx_mas(input)).toBe(expected);
  });
});
