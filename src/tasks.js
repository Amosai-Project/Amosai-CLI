import Listr from 'listr';
import { projectInstall } from 'pkg-install';

import { createProject } from './helpers/createProject';
import { copyTemplateFiles } from './helpers/copyTemplate';
import { initGit } from './helpers/initGit';

export const runTasks = async ({ name, template, git }) => {
  const templatePath = `${process.cwd()}/src/templates/${template}`;
  const projectPath = `${process.cwd()}/${name}`;

  const tasks = new Listr([
    {
      title: `Init project`,
      task: () => createProject(projectPath),
    },
    {
      title: 'Copy project files',
      task: () => copyTemplateFiles(templatePath, projectPath),
    },
    {
      title: 'Initialize git',
      task: () => initGit(projectPath),
      enabled: () => git,
    },
    {
      title: 'Install dependencies',
      task: () =>
        projectInstall({
          cwd: projectPath,
          prefer: 'npm',
        }),
    },
  ]);
  await tasks.run();
};
