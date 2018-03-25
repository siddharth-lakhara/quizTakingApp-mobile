import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './headerStyles';

const Headers = props => (
  <View style={styles.HeaderMain}>
    <Text style={styles.HeaderTitle}>Quizzy</Text>
    {/* <Text style={styles.HeaderUserWelcome} style={{ display: props.user ? 'inline' : 'none' }}>Hello {props.user}!</Text> */}
  </View>
);

export default Headers;
