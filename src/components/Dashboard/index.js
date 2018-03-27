import React from 'react';
// import './dashboard.css';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import styles from './dashboardStyles';
// options: Array[4]
// question: "What is the capital of India"
// questionid: 12

const Questions = (props) => {
  const { data, responses } = props;
  const questionBox = data.map((questions, index) => {
    const questionTitle =
      <View><Text style={styles.QuestionIndex}>Question {index + 1}</Text></View>;
    const questionText =
      <View><Text style={styles.QuestionText}> {questions.question} </Text></View>;
    let selectedIndex = null;
    const optionArray = questions.options.map((e, optionIndex) => {
      if (responses[questions.questionid] === e) { selectedIndex = optionIndex; }
      return ({ label: e, value: e });
    });
    console.log(optionArray);
    const optionDiv = (
      <RadioForm
        radio_props={optionArray}
        initial={selectedIndex}
        onPress={(value) => {
          responses[questions.questionid] = value;
          props.updateResponses(responses, questions.questionid);
        }}
      />
    );
    return (
      <View style={styles.questionBox} key={questions.questionid}>
        {questionTitle}
        {questionText}
        <View style={styles.QuestionOptions}>
          <Text style={styles.QuestionOptionsElem}>
            {optionDiv}
          </Text>
        </View>
      </View>
    );
  });
  return questionBox;
};

const calculateScore = userName =>
  fetch(`http://localhost:8080/calc/${userName}`)
    .then(res => res.json())
    .then(res => res.score);

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      responses: {},
    };
    this.updateUserResponses = this.updateUserResponses.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8080/fetch').then(res => res.json())
      .then((questions) => {
        this.updateQuestions(questions);
        console.log('questions: ', questions);
        fetch(`http://localhost:8080/responses/${this.props.userName}`).then(res => res.json())
          .then((responses) => {
            console.log('responses: ', responses);
            this.updateResponses(responses);
          });
      });
  }

  updateQuestions(questions) {
    this.setState({ questions });
    this.props.updateScore(questions.length);
  }

  updateResponses(responses) {
    this.setState({ responses });
  }

  updateUserResponses(responses, questionid) {
    this.setState({ responses });
    const postData = {
      username: this.props.userName,
      questionid,
      answer: responses[questionid],
    };
    fetch('http://localhost:8080/responses', {
      method: 'POST',
      body: JSON.stringify(postData),
    }).then(() => {});
  }
  render() {
    return (
      <View style={styles.dashboardMain}>
        <ScrollView>
          <Questions
            data={this.state.questions}
            responses={this.state.responses}
            updateResponses={this.updateUserResponses}
          />
        </ScrollView>
        {/* <button
          className="dashboard-btn"
          disabled={!(this.state.questions.length === Object.keys(this.state.responses).length)}
          onClick={() => {
            calculateScore(this.props.userName).then((score) => {
              this.props.changePage(score);
            });
          }}
        >
        Calculate
        </button> */}
      </View>
    );
  }
}

export default DashBoard;
