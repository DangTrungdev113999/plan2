import React from 'react';

import {ThemeProvider} from 'styled-components';
import Nagition from '~/routes';

import theme from '~/config/theme';
import {Provider} from 'react-redux';

import store from './configStore';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Nagition />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
