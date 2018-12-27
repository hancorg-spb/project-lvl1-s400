import { randomNumber, gameSample } from '..';

const randomOperation = () => {
  const operationIndex = randomNumber(1, 4);
  let stringOperation = '+';
  if (operationIndex === 1) {
    stringOperation = '-';
  } else if (operationIndex === 2) {
    stringOperation = '*';
  }
  return stringOperation;
};

const rule = 'What is the result of the expression?';

const calc = () => {
  const numberOne = randomNumber(1, 99);
  const numberTwo = randomNumber(1, 99);
  const operation = randomOperation();
  let question = '';
  let trueAnswer = 0;

  if (operation === '+') {
    question = `${numberOne} + ${numberTwo}`;
    trueAnswer = String(numberOne + numberTwo);
  } else if (operation === '-') {
    question = `${numberOne} - ${numberTwo}`;
    trueAnswer = String(numberOne - numberTwo);
  } else {
    question = `${numberOne} * ${numberTwo}`;
    trueAnswer = String(numberOne * numberTwo);
  }
  return [question, trueAnswer];
};

export default () => gameSample(rule, calc);
