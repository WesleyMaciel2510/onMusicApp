import {AppRegistry} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './application/store';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';

const AppWithRedux = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWithRedux);
TrackPlayer.registerPlaybackService(() => require('./service').default);
