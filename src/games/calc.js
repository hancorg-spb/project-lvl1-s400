import gameSample from '..';
import randomNumber from '../utils';

const randomOperation = () => {
  const operationIndex = randomNumber(1, 4);
  const stringOperation = ['+', '-', '*'][operationIndex];
  return stringOperation;
};

const rule = 'What is the result of the expression?';

const calc = () => {
  const numberOne = randomNumber(1, 99);
  const numberTwo = randomNumber(1, 99);
  const operation = randomOperation();
  let question;
  let trueAnswer;

  switch (operation) {
    case '+':
      question = `${numberOne} + ${numberTwo}`;
      trueAnswer = String(numberOne + numberTwo);
      break;
    case '-':
      question = `${numberOne} - ${numberTwo}`;
      trueAnswer = String(numberOne - numberTwo);
      break;
    default:
      question = `${numberOne} * ${numberTwo}`;
      trueAnswer = String(numberOne * numberTwo);
      break;
  }

  return [question, trueAnswer];
};

export default () => gameSample(rule, calc);
