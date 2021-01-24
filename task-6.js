// let number;
let number = 0;
let input;

do {
  input = prompt('Enter your number:');
  const convertedInput = Number(input);
  const notNum = Number.isNaN(convertedInput);

  if (notNum === true) {
    alert('Wrong number');
    break;
  } else {
    number += convertedInput;
  }
} while (input !== null);

console.log(number);
