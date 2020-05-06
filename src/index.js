#!/usr/bin/env node
require('yargs')
  .usage('Usage: $0 <command> [options]')
  .help('h')
  .alias('h', 'help').argv;
import inquirer from 'inquirer';

import './welcomeMessage';
import questions from './questions';
import { runTasks } from './tasks';
import { finalMessage } from './finalMessage';

inquirer.prompt(questions).then(async (answers) => {
  await runTasks(answers);
  finalMessage(answers);
});
