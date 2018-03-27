import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import styles from './LeaderBoardStyle';

const ScoreBoard = (props) => {
  const { leaders } = props;
  console.log('leaders: ', leaders);
  const board = leaders.map((elem, index) => (
    <View
      style={[styles.ScoreBoardBoard, { backgroundColor: props.user === elem.username ? '#7c7ddd' : '#53BBE1' }]}
    >
      {/* <Text style={[{ width: '100%' }, styles.ScoreBoardText]}> */}
      {/* <Text style={styles.ScoreBoardText}> */}
      <View style={styles.ScoreBoardContentAligner}>
        <Text>
          <Text style={styles.ScoreBoardBoardIndex}>{index + 1}. </Text>
          <Text style={styles.ScoreBoardBoardUsername}>{elem.username}</Text>
        </Text>
      </View>
      <Text style={styles.ScoreBoardBoardScore}>{elem.score}</Text>

      {/* </Text> */}
    </View>
  ));
  return (
    <View style={styles.ScoreBoardMain}>
      <Text style={styles.ScoreBoardText}>Leaderboard</Text>
      {board}
    </View>
  );
};

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/leaders').then(res => res.json())
      .then((leaders) => {
        this.updateLeaders(leaders);
      });
  }

  updateLeaders(leaders) {
    this.setState({ leaders }, () => {
      console.log('state: ', this.state.leaders, this.props.currentUser);
    });
  }

  render() {
    return (
      <View style={styles.LeaderboardMain}>
        <View style={styles.LeaderboardScores}>
          <Text style={styles.LeaderboadScoresText}>Your Score</Text>
          <Text>
            <Text style={styles.LeaderboardScore1}> {this.props.score} </Text>
            <Text style={styles.LeaderboardScore2}>/{this.props.maxScore}</Text>
          </Text>
        </View>
        <ScoreBoard
          user={this.props.currentUser}
          leaders={this.state.leaders}
        />
        <Button
          title="Play Again"
          style={styles.LeaderboardBtn}
          onPress={() => { this.props.changePage(); }}
        />
      </View>
    );
  }
}

export default LeaderBoard;
