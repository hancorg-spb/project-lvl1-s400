import gameSample from '..';
import randomNumber from '../utils';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  const question = randomNumber(1, 99);
  const trueAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => gameSample(rule, prime);
