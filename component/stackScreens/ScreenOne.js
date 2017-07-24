import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

class ScreenOne extends Component {
  static navigationOptions = {
    title: "Welcome"
  }
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props, "props is here");
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => navigate("ScreenTwo", {screen: "Screen Two"})}
          style={styles.button}>
          <Text
            style={styles.buttonText}>Screen One </Text>
        </TouchableHighlight>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center'
  }
});
export default ScreenOne;