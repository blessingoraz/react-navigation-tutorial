import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image
} from 'react-native';

import styles from './styles';

class ScreenTwo extends Component {
  static navigationOptions = {
    tabBarLabel: 'ScreenTwo',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/chat-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => navigate('ScreenThree')}
          style={[styles.button, {backgroundColor: '#C56EE0'}]}>
          <Text style={styles.buttonText}>Go To Screen Three </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ScreenTwo;