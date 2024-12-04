import { calculateSum } from "../day-3/index.js";
import { describe, it, expect } from "vitest";

describe("Advent of Code - Day 3", () => {
    it("test case 1", () => {
        const input = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`
        const expected = 2 * 4 + 8 * 5;  // Expected: 8 + 40 = 48
        expect(calculateSum(input)).toBe(expected);
    });

    it("test case 2", () => {
        const input = `mul(3,5)_mul(4,6)do()_mul(7,8)+don't()_mul(2,9)`
        const expected = 3 * 5 + 4 * 6 + 7 * 8;  // Expected: 15 + 24 + 56 = 95
        expect(calculateSum(input)).toBe(expected);
    });

    it("test case 3", () => {
        const input = `mul(10,2)_mul(5,5)+don't()_mul(1,1)+do()_mul(3,3)`
        const expected = 10 * 2 + 5 * 5 + 3 * 3;  // Expected: 20 + 25 + 9 = 54
        expect(calculateSum(input)).toBe(expected);
    });

    it("test case 4", () => {
        const input = `mul(2,4)_mul(1,3)_mul(7,6)+don't()_mul(5,5)`
        const expected = 2 * 4 + 1 * 3 + 7 * 6;  // Expected: 8 + 3 + 42 = 53
        expect(calculateSum(input)).toBe(expected);
    });

    it("test case 5", () => {
        const input = `mul(5,5)+do()_mul(6,6)_mul(7,7)`
        const expected = 5 * 5 + 6 * 6 + 7 * 7;  // Expected: 25 + 36 + 49 = 110
        expect(calculateSum(input)).toBe(expected);
    });

    it("test case 6", () => {
        const input = `xmul(10,10)do()_mul(8,7)don't()mul(4,4)`
        const expected = 10 * 10 + 8 * 7;  // Expected: 100 + 56 = 156
        expect(calculateSum(input)).toBe(expected);
    });
});
