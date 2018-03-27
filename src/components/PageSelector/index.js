import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import LoginPage from '../LoginPage';
import DashBoard from '../Dashboard';
import LeaderBoard from '../LeaderBoard';

class PageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'leaderBoard',
      score: 3,
      maxScore: 5,
    };
  }

  render() {
    switch (this.state.currentPage) {
      case 'login': {
        return (
          <LoginPage
            updateUserName={this.props.updateUserName}
            changePage={() => {
            this.setState({ currentPage: 'dashboard' });
          }}
          />
        );
      }

      case 'dashboard': {
        return (
          <DashBoard
            userName={this.props.user}
            updateScore={(maxScore) => {
              this.setState({ maxScore });
            }}
            changePage={(score) => {
              this.setState({
                currentPage: 'leaderBoard',
                score,
              });
          }}
          />
        );
      }

      case 'leaderBoard': {
        return (
          <LeaderBoard
            currentUser={this.props.user}
            score={this.state.score}
            maxScore={this.state.maxScore}
            changePage={() => {
              this.setState({
                currentPage: 'login',
              });
            }}
          />
        );
      }

      default: {
        return (<View> <Text>Invalid Page </Text></View>);
      }
    }
  }
}


export default PageSelector;
