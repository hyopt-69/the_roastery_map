// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        message: `What's the page name? (ex. MainPage)`,
        name: 'page',
        type: 'input',
      },
      {
        message: `What's the page group?`,
        name: 'pageGroup',
        type: 'input',
      },
    ];

    return inquirer.prompt(questions).then(({ page, pageGroup }) => ({
      directory: path.join(page, pageGroup),
      name: page,
    }));
  },
};
