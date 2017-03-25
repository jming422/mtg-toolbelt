// counter.js
// MTGToolbelt

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class MTGToolbelt extends Component {

  static get propTypes() {
    return {
      style: React.PropTypes.any
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      value: 20
    };

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableHighlight onPress={this.decrement}>
          <Text style={styles.symbol}>&ndash;</Text>
        </TouchableHighlight>

        <Text style={styles.number}>{this.state.value}</Text>

        <TouchableHighlight onPress={this.increment}>
          <Text style={styles.symbol}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }

  decrement() {
    this.setState((prevState) => {
      return { value: prevState.value - 1 };
    });
  }

  increment() {
    this.setState((prevState) => {
      return { value: prevState.value + 1 };
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'steelblue',
    borderTopWidth: 5
  },
  number: {
    fontSize: 140,
    textAlign: 'center'
  },
  symbol: {
    height: 65,
    width: 65,
    fontSize: 60,
    lineHeight: 60,
    textAlign: 'center',
    marginLeft: 25,
    marginRight: 25,
    borderWidth: 3,
    borderRadius: 50
  },
});
