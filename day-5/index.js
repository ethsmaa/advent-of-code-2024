import { input } from "./input.js";

const [ruleSection, updateSection] = input.split("\n\n");
const rules = ruleSection.split("\n").map(line => line.split("|").map(Number));
const updates = updateSection.split("\n").map(line => line.split(",").map(Number));

const checkOrder = (pages) => {
  const positions = {};
  pages.forEach((page, index) => {
    positions[page] = index;
  });

  return rules.every(([first, second]) => {
    if (positions[first] !== undefined && positions[second] !== undefined) {
      return positions[first] < positions[second]; 
    }
    return true;
  });
};

const findMiddlePage = (pages) => pages[Math.floor(pages.length / 2)];

let totalSum = 0;
updates.forEach(update => {
  if (checkOrder(update)) {
    totalSum += findMiddlePage(update);
  }
});

console.log("Result:", totalSum);
