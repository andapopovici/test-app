import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import Counter from './components/Counter';

const config = configureStore({
  counter: 0
}); 

export default class App extends React.Component {
  render() {
    console.log("loggin in App"); 
    console.log(config.store);
    return (
      <Provider store={config.store}>
      <PersistGate loading={null} persistor={config.persistor}>
        <Counter />
      </PersistGate>  
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
