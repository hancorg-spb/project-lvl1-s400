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
  const trueAnswer = String(firstNumber + difference * hiddenNumberPosition);
  let question = '';
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenNumberPosition) {
      question = `${question} ..`;
    } else {
      question = `${question} ${firstNumber + difference * i}`;
    }
  }
  return [question.slice(1), trueAnswer];
};

export default () => gameSample(rule, progression);
