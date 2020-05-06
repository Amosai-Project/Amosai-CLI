import inquirer from 'inquirer';

import questions from './questions';
import { createProject } from './helpers/createProject';
import { copyTemplateFiles } from './helpers/copyTemplate';

inquirer.prompt(questions).then(async ({ name, template }) => {
  const templatePath = `${process.cwd()}/src/templates/${template}`;
  const projectPath = `${process.cwd()}/${name}`;
  createProject(projectPath);
  await copyTemplateFiles(templatePath, projectPath);
});
