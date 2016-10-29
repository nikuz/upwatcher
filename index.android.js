'use strict';

import env from './env';
import React from 'react';
import {
  StatusBar,
  View,
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';
import AppStore from './js/store';
import Main from './js/views/main-controller';

class App extends React.Component {
  render() {
    return (
      <Provider store={AppStore}>
        <View style={{flex: 1}}>
          <StatusBar
            backgroundColor="#67be44"
          />
          <Main />
        </View>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('upwatcher', () => App);
