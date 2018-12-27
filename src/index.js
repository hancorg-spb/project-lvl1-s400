import readlineSync from 'readline-sync';

const numberOfQuestions = 3;

// main game function
const gameSample = (rule, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const [question, trueAnswer] = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== trueAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameSample;
