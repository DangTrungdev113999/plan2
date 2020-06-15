import React from 'react';

import {ThemeProvider} from 'styled-components';
import Nagition from '~/navigation';

import theme from '~/config/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Nagition />
    </ThemeProvider>
  );
};

export default App;
