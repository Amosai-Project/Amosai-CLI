import fs from 'fs';
import chalk from 'chalk';

export const createProject = (projectPath) => {
  if (fs.existsSync(projectPath)) {
    console.log(
      chalk.red(`Folder already exists. Delete or use another name.`)
    );
    return false;
  }
  fs.mkdirSync(projectPath);

  return true;
};
