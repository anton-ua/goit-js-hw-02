const formatString = function(string) {
  const maxLengthOfString = 40;
  let formatedString = "";
  if (string.length > maxLengthOfString) {
    for (let i = 0; i < maxLengthOfString; i += 1) {
      formatedString += string[i];
    }
    return formatedString + "...";
  }
  return string;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
