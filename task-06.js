const numbers = [];
let lastArg;
let total = 0;

while (lastArg !== null) {
  lastArg = prompt(`Введите число`);
  if (isNaN(Number(lastArg))) {
    alert(`Было введено не число, попробуйте еще раз`);
  } else if (Number(lastArg) !== 0) {
    numbers.push(Number(lastArg));
  }
}

for (let item of numbers) {
  total += item;
}

console.log(`Общая сумма чисел равна ${total}`);
