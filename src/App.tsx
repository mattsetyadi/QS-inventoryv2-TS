import { persistor, store } from './Modules/App/ConfigureStore';

import { ConnectedRouter } from 'connected-react-router';
import Navigation from './Modules/App/Navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import history from './Modules/App/History';

function App(props: any) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Navigation {...props} />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
