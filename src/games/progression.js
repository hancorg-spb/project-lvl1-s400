import gameSample from '..';
import randomNumber from '../utils';

const numberOfDigits = 10;

const rule = 'What number is missing in the progression?';

const progression = () => {
  const maxFirstNumber = 100;
  const firstNumber = randomNumber(1, maxFirstNumber);
  const maxProgressionNumber = 10;
  const progressionNumber = randomNumber(1, maxProgressionNumber);
  const hideNumber = randomNumber(1, numberOfDigits);
  let currentNumber = firstNumber;
  let trueAnswer;
  let question = '';
  for (let i = 1; i < numberOfDigits; i += 1) {
    if (i === hideNumber) {
      trueAnswer = String(currentNumber);
      currentNumber += progressionNumber;
      question += '.. ';
    }
    question += `${currentNumber} `;
    currentNumber += progressionNumber;
  }
  return [question, trueAnswer];
};

export default () => gameSample(rule, progression);
