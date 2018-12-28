import gameSample from '..';
import randomNumber from '../utils';

const length = 10;
const maxFirstNumber = 100;
const maxDifference = 10;

const rule = 'What number is missing in the progression?';

const progression = () => {
  const firstNumber = randomNumber(1, maxFirstNumber);
  const difference = randomNumber(1, maxDifference);
  const hiddenNumberPosition = randomNumber(1, length);
  let currentNumber = firstNumber;
  let trueAnswer;
  let question = '';
  for (let i = 1; i < length; i += 1) {
    if (i === hiddenNumberPosition) {
      trueAnswer = String(currentNumber);
      currentNumber = firstNumber + difference * i;
      i += 1;
      question += '.. ';
    }
    question += `${currentNumber} `;
    currentNumber = firstNumber + difference * i;
  }
  return [question, trueAnswer];
};

export default () => gameSample(rule, progression);
