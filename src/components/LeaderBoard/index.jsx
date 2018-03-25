import React from 'react';
import './LeaderBoard.css';

const ScoreBoard = (props) => {
  const { leaders } = props;
  console.log('leaders: ', leaders);
  const board = leaders.map((elem, index) => (
    <div
      className="ScoreBoard-board"
      style={{ backgroundColor: props.user === elem.username ? '#7c7ddd' : '#53BBE1' }}
    >
      <span className="ScoreBoard-contentAligner">
        <span className="ScoreBoard-board-index">{index + 1}. </span>
        <span className="ScoreBoard-board-username">{elem.username}</span>
      </span>
      <span className="ScoreBoard-board-score">{elem.score}</span>
    </div>
  ));
  return (
    <div className="ScoreBoard-main">
      Leaderboard
      {board}
    </div>
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
    fetch('/leaders').then(res => res.json())
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
      <div className="Leaderboard-main">
        <div className="Leaderboard-scores">
          Your Score
          <div className="Leaderboard-userScore">
            <span className="Leaderboard-score1"> {this.props.score} </span>
            <span className="Leaderboard-score2">/{this.props.maxScore}</span>
          </div>
        </div>
        <ScoreBoard
          user={this.props.currentUser}
          leaders={this.state.leaders}
        />
        <button className="Leaderboard-btn" onClick={() => { this.props.changePage(); }}>Play Again</button>

      </div>
    );
  }
}

export default LeaderBoard;
