/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Headers from './components/header';
import PageSelector from './components/PageSelector';
import styles from './AppStyle';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserName: '',
    };
  }

  render() {
    return (
      <View style={styles.App}>
        {/* <Headers user={this.state.currentUserName} /> */}
        <PageSelector
          user={this.state.currentUserName}
          updateUserName={userName => fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify({
              userName,
            }),
          }).then(() => this.setState({ currentUserName: userName }))}
        />
      </View>
    );
  }
}
