import {input} from './input.js';

export const parse = (raw) =>
    raw
        .trim()
        .split("\n")
        .map((line) => line.trim().split(" ").map(Number));

export const isSafe = (arr) => {
    const isAscending = arr.every((v, i) => i === 0 || v > arr[i - 1]);
    const isDescending = arr.every((v, i) => i === 0 || v < arr[i - 1]);
    const difference = arr.every((v, i) => i === arr.length - 1 || (Math.abs(v - arr[i + 1]) >= 1 && Math.abs(v - arr[i + 1]) <= 3));
    return (isAscending || isDescending) && difference;
};

export const canBeSafeWithOneRemoval = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
        if (isSafe(newArr)) {
            return true;
        }
    }
    return false;
};

export const solvePart1 = (rawInput) => {
    const reports = parse(rawInput);
    return reports.filter((report) => isSafe(report)).length;
};

export const solvePart2 = (rawInput) => {
    const reports = parse(rawInput);
    return reports.filter(
        (report) => isSafe(report) || canBeSafeWithOneRemoval(report)
    ).length;
};

console.log('part 1: ', solvePart1(input));
console.log('part 2: ', solvePart2(input));