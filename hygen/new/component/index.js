// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        message: `What's the component name?`,
        name: 'name',
        type: 'input',
      },
      {
        choices: ['atoms', 'molecules', 'organisms', 'templates'],
        message: `What's the atomic group ?`,
        name: 'atomicGroup',
        type: 'select',
      },
      {
        message: `What's the component group?`,
        name: 'componentGroup',
        type: 'input',
      },
    ];

    return inquirer
      .prompt(questions)
      .then(({ name, atomicGroup, componentGroup }) => ({
        directory: path.join(atomicGroup, componentGroup),
        name,
      }));
  },
};
