const input = "";
const regex = /(mul\((\d+),(\d+)\))|(\bdo\(\))|(\bdon't\(\))/g;

let sum = 0;
let enabled = true;

let match;
while ((match = regex.exec(input)) !== null) {
  if (match[1]) {
    if (enabled) {
      const num1 = +match[2];
      const num2 = +match[3];
      sum += num1 * num2;
    }
  }

  // do komutu var
  else if (match[4]) {
    enabled = true;
  }

  // don't komutu var
  else if (match[5]) {
    enabled = false;
  }
}

console.log(sum);
