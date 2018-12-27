import readlineSync from 'readline-sync';

// additional functions
const numberOfQuestions = 3;
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const isEven = number => number % 2 === 0;

// dialog
const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello ${userName}!`);
};

// main game function
const gameSample = (rule, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const [question, trueAnswer] = game();
    console.log(`Question: ${question}`);
    const isEvenQuestion = readlineSync.question('Your answer: ');

    if (isEvenQuestion !== trueAnswer) {
      console.log(`'${isEvenQuestion}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export {
  sayHello, randomNumber, isEven, numberOfQuestions, gameSample,
};
