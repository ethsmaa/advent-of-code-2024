
export function calculateSum(input) {
  const regex = /(mul\((\d+),(\d+)\))|(do\(\))|(don't\(\))/g;

  let sum = 0;
  let enabled = true;

  let match;
  while ((match = regex.exec(input)) !== null) {
    if (match[1]) {
      if (enabled) {
        const num1 = parseInt(match[2], 10);
        const num2 = parseInt(match[3], 10);
        sum += num1 * num2;
      }
    } else if (match[4]) {
      enabled = true;
    } else if (match[5]) {
      enabled = false;
    }
  }
  return sum;
}
