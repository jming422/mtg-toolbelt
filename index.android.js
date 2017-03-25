// index.android.js
// MTGToolbelt

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import Counter from './components/counter';

export default class MTGToolbelt extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter style={styles.flipped} />
        <Counter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  flipped: {
    transform: [{rotate: '180deg'}]
  }
});

AppRegistry.registerComponent('MTGToolbelt', () => MTGToolbelt);
