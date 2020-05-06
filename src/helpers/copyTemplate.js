import ncp from 'ncp';
import { promisify } from 'util';

const copy = promisify(ncp);

export const copyTemplateFiles = async (templateDir, targetDir) => {
  return copy(templateDir, targetDir, {
    clobber: false,
  });
};
