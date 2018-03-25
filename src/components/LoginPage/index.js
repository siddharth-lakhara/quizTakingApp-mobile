import React from 'react';
import {
  View,
  Text,
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
          <Text style={styles.LoginCardLeftText2}> Quizzy! </Text>
        </View>
        {/* //   <div style={styles."LoginCard-right"> */}
        {/* //     <div style={styles."loginContents-aligner" />
      //     <div style={styles."loginContents-items">
      //       <div style={styles."LoginCard-right-text">Login</div>
      //       <div>
      //         <div style={styles."LoginCard-right-label">Username</div>
      //         <div style={styles."LoginCard-right-inp">
      //           <input
      //             type="text"
      //             style={styles."userName-input"
      //             value={this.userName}
      //             onChange={(event) => { this.updateUserName(event.target.value); }}
      //           />
      //         </div>
      //       </div>
      //       <input
      //         type="button"
      //         style={styles."LoginCard-right-btn"
      //         value="Login"
      //         onClick={() => {
      //           if (this.checkInput()) {
      //             this.props.updateUserName(this.state.userName).then(() => {
      //               this.props.changePage();
      //             });
      //           } else {
      //             alert('Empty Username not accepted!');
      //           }
      //           }}
      //       />
      //     </div>
      //   </div> */}
      </View>
    );
  }
}

export default LoginPage;

