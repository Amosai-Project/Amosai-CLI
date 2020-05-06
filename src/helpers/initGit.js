import execa from 'execa';

export const initGit = async (targetDir) => {
  try {
    await execa('git', ['init'], {
      cwd: targetDir,
    });
    return;
  } catch (e) {
    return Promise.reject(new Error(e.message));
  }
};
