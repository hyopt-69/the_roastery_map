import 'modern-css-reset';
import * as nextRouter from 'next/router';

// nextRouterのmock
nextRouter.useRouter = () => {};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
