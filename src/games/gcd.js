import gameSample from '..';
import randomNumber from '../utils';

const searchAnswer = (divisorOne, divisorTwo) => {
  for (let i = Math.min(divisorOne, divisorTwo); i > 1; i -= 1) {
    if (divisorOne % i === 0 && divisorTwo % i === 0) {
      return i;
    }
  }
  return 1;
};

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const numberOne = randomNumber(1, 99);
  const numberTwo = randomNumber(1, 99);
  const trueAnswer = String(searchAnswer(numberOne, numberTwo));
  const question = `${numberOne} ${numberTwo}`;
  return [question, trueAnswer];
};

export default () => gameSample(rule, gcd);
