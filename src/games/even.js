import { randomNumber, gameSample } from '..';

const isEven = number => number % 2 === 0;

const rule = 'Answer "yes" if number even otherwise answer "no".';

const even = () => {
  const question = randomNumber(1, 99);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => gameSample(rule, even);
