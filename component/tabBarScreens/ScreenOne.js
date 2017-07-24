import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';

import styles from './styles';

class ScreenOne extends Component {
  static navigationOptions = {
    title: 'Welcome',
    tabBarLabel: 'ScreenOne',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/notification-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <TouchableHighlight
            onPress={() => navigate('ScreenTwo')}
            style={[styles.button, {backgroundColor: '#7567B1'}]}>
            <Text style={styles.buttonText}> Go To Screen Two </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ScreenOne;