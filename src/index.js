#!/usr/bin/env node
require('yargs')
  .usage('Usage: $0 <command> [options]')
  .help('h')
  .alias('h', 'help').argv;
import inquirer from 'inquirer';
import clear from 'clear';

import questions from './questions';
import { runTasks } from './tasks';

inquirer.prompt(questions).then(async (answers) => {
  clear();
  await runTasks(answers);
  console.log('Done!');
});
