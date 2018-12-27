import { randomNumber, isEven, gameSample } from '..';

const rule = 'Answer "yes" if number even otherwise answer "no".\n';

const even = () => {
  const question = randomNumber(1, 99);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => gameSample(rule, even);
