import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Store from './src/store';

import MainNavigation from './src/navigation';

const {store, persistor} = Store();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={{flex: 1}}>
            <MainNavigation />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
