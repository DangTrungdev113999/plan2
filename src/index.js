import React, {useEffect, useState} from 'react';
import {PersistGate} from 'redux-persist/integration/react';

import {ThemeProvider} from 'styled-components';
import Navigation from '~/routes';

import theme from '~/config/theme';
import {Provider} from 'react-redux';

import configureStore from './configureStore';
import {Loading} from './components';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [store, setStore] = useState(
    () => configureStore(() => setLoading(false)).store,
  );
  return (
    <ThemeProvider theme={theme}>
      {/* {loading ? (
        <Loading color="black" size={40} />
      ) : ( */}
      <Provider store={store}>
        <PersistGate
          loading={<Loading color="black" size={40} />}
          persistor={configureStore().persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
      {/* )} */}
    </ThemeProvider>
  );
};

export default App;
