module.exports = {
  prompt: ({ inquirer }) => {
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
        message: `What's the component group ?`,
        name: 'group',
        type: 'select',
      },
    ];

    return inquirer.prompt(questions).then(({ name, group }) => ({
      directory: group,
      name,
    }));
  },
};
