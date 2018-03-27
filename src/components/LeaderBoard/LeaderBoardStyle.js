import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  LeaderboardMain: {
    paddingTop: 10,
  },

  LeaderboardScores: {
    paddingLeft: 30,
  },

  LeaderboadScoresText: {
    textAlign: 'left',
    fontSize: 20,
    color: '#EA9838',
  },

  LeaderboardUserScore: {
    color: 'black',
  },

  LeaderboardScore1: {
    fontSize: 40,
  },

  LeaderboardScore2: {
    fontWeight: 'bold',
  },

  ScoreBoardMain: {
    display: 'flex',
    // flexDirection: column,
    alignItems: 'center',

  },

  ScoreBoardContentAligner: {
    margin: 0,
    paddingLeft: 5,
    width: '80%',
    flexWrap: 'wrap',
  },

  ScoreBoardText: {
    fontSize: 30,
  },

  ScoreBoardBoard: {
    backgroundColor: '#53BBE1',
    margin: 10,
    width: '70%',
    display: 'flex',
    flexWrap: 'wrap',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
  },

  ScoreBoardBoardUsername: {
    color: 'white',

  },

  ScoreBoardBoardScore: {
    alignSelf: 'flex-start',
    color: 'white',
  },

  // LeaderboardBtn: focus : {
  //     outline: 0,
  // },

  LeaderboardBtn: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 20,
    width: '20%',
    padding: 10,
    marginTop: 10,
    fontSize: 30,
  },
});
