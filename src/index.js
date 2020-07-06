import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';

import {ThemeProvider} from 'styled-components';
import Navigation from '~/routes';

import theme from '~/config/theme';
import {Provider} from 'react-redux';

import DeviceInfo from 'react-native-device-info';
const currentVersion = DeviceInfo.getVersion();

console.log({currentVersion});

import configureStore from './configureStore';
import {Loading} from './components';

const App = () => {
  const store = configureStore().store;
  const persistor = configureStore().persistor;
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate
          loading={<Loading color="black" size={40} />}
          persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
