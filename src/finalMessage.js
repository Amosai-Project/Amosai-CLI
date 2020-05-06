import { darkGreen, blue, red } from './constants/colors';

export const finalMessage = ({ name }) => {
  console.log(darkGreen(`\nNow you can begin to work on: ${red(name)}`));
  console.log(blue('\nGithub: Amosai-Project'));
  console.log(blue('Web: www.amosai.dev\n'));
};
