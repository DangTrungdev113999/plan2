import React from 'react';

import {ThemeProvider} from 'styled-components';
import Nagition from '~/navigation';

import theme from '~/config/theme';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from '~/reducer';

const store = createStore(rootReducer);

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
