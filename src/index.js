import readlineSync from 'readline-sync';

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello ${userName}!`);
};


const isEvenNumber = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const randomNum = randomNumber(1, 99);
    console.log(`Question: ${randomNum}`);
    const isEvenQuestion = readlineSync.question('Your answer: ');
    let trueAnswer = '';

    if (randomNum % 2 === 0) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
    }

    if (isEvenQuestion !== trueAnswer) {
      return console.log(`'${isEvenQuestion}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};

export { isEvenNumber, sayHello };
