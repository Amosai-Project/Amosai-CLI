import boxen from 'boxen';
import clear from 'clear';

import { red, green } from './constants/colors';

(() => {
  clear();
  const msg = `${red('Amosai.CLI\n\n')} ${green(
    '💡 Create your next Javascript project 💡'
  )}`;
  const optionsBoxen = {
    borderStyle: 'doubleSingle',
    borderColor: '#E4785F',
    backgroundColor: '#21303E',
    dimBorder: true,
    float: 'center',
    align: 'center',
    padding: {
      top: 1,
      right: 10,
      bottom: 1,
      left: 10,
    },
    margin: {
      bottom: 1,
    },
  };
  console.log(boxen(msg, optionsBoxen));
})();
