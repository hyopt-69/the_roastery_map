import path from 'path';

export function prompt({ inquirer }) {
  const questions = [
    {
      message: `What's the component name?`,
      name: 'name',
      type: 'input',
      validate: (input) => {
        const isNull = input === '';
        const isLowerCase = input.toLowerCase() === input;
        return !isNull && !isLowerCase;
      },
    },
    {
      choices: ['parts', 'patterns', 'layouts'],
      message: `What's the atomic group ?`,
      name: 'atomicGroup',
      type: 'select',
    },
    {
      message: `What's the component group?`,
      name: 'componentGroup',
      type: 'input',
      validate: (input) => {
        const isNull = input === '';
        const isLowerCase = input.toLowerCase() === input;
        return isNull || !isLowerCase;
      },
    },
  ];

  return inquirer
    .prompt(questions)
    .then(({ name, atomicGroup, componentGroup }) => ({
      directory: path.join(atomicGroup, componentGroup),
      name,
    }));
}
