import fs from 'fs';
import path from 'path';

const choices = fs.readdirSync(path.join(__dirname, 'templates'));

export default [
  {
    name: 'template',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: choices,
  },
  {
    name: 'name',
    type: 'input',
    message: 'Project name:',
  },
  {
    name: 'git',
    type: 'confirm',
    message: 'Initialize Git on this project?',
  },
];
