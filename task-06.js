const numbers = [];
let lastArg;
let lastArgNum;
let total = 0;

while (lastArg !== null) {
  lastArg = prompt(`Введите число`);
  lastArgNum = Number(lastArg);
  if (isNaN(lastArgNum)) {
    alert(`Было введено не число, попробуйте еще раз`);
  } else if (lastArgNum !== 0) {
    numbers.push(lastArgNum);
  }
}

for (let item of numbers) {
  total += item;
}

console.log(`Общая сумма чисел равна ${total}`);
