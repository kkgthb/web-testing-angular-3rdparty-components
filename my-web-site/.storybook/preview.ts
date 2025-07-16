import type { Preview } from '@storybook/angular';
import '!style-loader!css-loader!sass-loader!../src/styles.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
