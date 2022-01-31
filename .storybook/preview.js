import Styles from '../src/styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#47587c',
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <>
      <Styles />
      <Story />
    </>
  ),
];
