import readlineSync from 'readline-sync';

const numberOfQuestions = 3;
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const isEven = number => number % 2 === 0;

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello ${userName}!`);
};

const isEvenNumber = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const question = randomNumber(1, 99);
    console.log(`Question: ${question}`);
    const isEvenQuestion = readlineSync.question('Your answer: ');
    const trueAnswer = isEven(question) ? 'yes' : 'no';

    if (isEvenQuestion !== trueAnswer) {
      console.log(`'${isEvenQuestion}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\n`);
      console.log(`Let's try again ${userName}!`);
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export { isEvenNumber, sayHello };
