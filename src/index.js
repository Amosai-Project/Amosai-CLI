import inquirer from 'inquirer';

import questions from './questions';
import { runTasks } from './tasks';

inquirer.prompt(questions).then(async (answers) => {
  await runTasks(answers);
  console.log('Done!');
});
