import { createInterface } from 'node:readline';
import commitMessage from './message';

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

export const commitAction = () => {
  readline.question('Choose a commit type: ', (answer) => {
    commitMessage.type = answer;

    readline.question('Choose a commit scope(Optional): ', (answer) => {
      commitMessage.scope = answer;

      readline.question('Enter the commit title: ', (answer) => {
        commitMessage.title = answer;

        readline.question('Enter the commit body(Optional): ', (answer) => {
          commitMessage.body = answer;

          readline.close();
        });
      });
    });
  });

  readline.on('close', () => {
    console.log(commitMessage);
  });
}