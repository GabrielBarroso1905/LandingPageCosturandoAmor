import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds:{
      defoutt: 'ligth',
      values:[
        {
          name: 'ligth',
          value: theme.colors.white
        },
        {
          name: 'dark',
          value: theme.colors.primaryColor
        },
      ]
    }
      ,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>

    <Story/>
    <GlobalStyles/>
    </ThemeProvider>
  )
];