import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import styles from './LoginPageStyle';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  checkInput() {
    return this.state.userName !== undefined;
  }

  updateUserName(newUserName) {
    this.setState({
      userName: newUserName,
    }, () => { console.log('username: ', this.state.userName); });
  }

  render() {
    return (
      <View style={styles.LoginPageMain}>
        <View style={styles.LoginCardTop}>
          <Text style={styles.LoginCardTopText1}> Welcome </Text>
          <Text style={styles.LoginCardTopText1}> to </Text>
          <Text style={styles.LoginCardTopText2}> Quizzy! </Text>
        </View>
        <View style={styles.LoginCardBottom}>
          <View style={styles.loginContentsAligner} />
          <View style={styles.loginContentsItems}>
            <Text style={styles.LoginCardBottomText}>Login</Text>
            <View>
              <Text style={styles.LoginCardBottomLabel}>Username</Text>
              <TextInput
                style={styles.userNameInput}
                value={this.state.userName}
                onChangeText={(newUserName) => {
                  // console.log('text: ', text);
                  // console.log('value: ', text.target.value);
                  this.updateUserName(newUserName);
                }}
              />
            </View>
            <View style={styles.LoginCardBottomBtn}>
              <Button
                title="Login"
                onPress={(arg) => {
                if (this.checkInput()) {
                  this.props.updateUserName(this.state.userName).then(() => {
                    this.props.changePage();
                  });
                } else {
                  alert('Empty Username not accepted!');
                }
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginPage;

