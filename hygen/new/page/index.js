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
        message: `What's the section name if you wanna section component? (ex. TopSection)`,
        name: 'section',
        type: 'input',
      },
    ];

    return inquirer.prompt(questions).then(({ page, section }) => ({
      directory: path.join(page, section),
      name: section || page,
    }));
  },
};
