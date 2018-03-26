import React from 'react';
// import './dashboard.css';
import {
  View,
  Text,
} from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';
import styles from './dashboardStyles';
// options: Array[4]
// question: "What is the capital of India"
// questionid: 12

const Questions = (props) => {
  const { data, responses } = props;
  const questionBox = data.map((questions, index) => {
    const questionTitle = <View><Text style={styles.QuestionIndex}>Questions {index + 1}</Text></View>;
    const questionText = <View><Text style={styles.QuestionText}> {questions.question} </Text></View>;
    const optionArray = questions.options;
    console.log(optionArray);
    // const optionDiv = optionArray.map(e => (
    //   <View style={styles.QuestionOptionsContainer}>
    //     <RadioButtons
    //       options={e}
    //       style={styles.QuestionOptionsElem}
    //       selectedOption={responses[questions.questionid] === e}
    //       onSelection={(event) => {
    //         responses[questions.questionid] = (event.target.value);
    //         props.updateResponses(responses, questions.questionid);
    //       }}
    //     />
    //     {/* &nbsp;{e}<br /> */}
    //   </View>
    // ));
    return (
      <View style={styles.questionBox} key={questions.questionid}>
        {questionTitle}
        {questionText}
        {/* <View className="Question-options">
          {optionDiv}
        </View> */}
      </View>
    );
  });

  return questionBox;
};

const calculateScore = userName =>
  fetch(`/calc/${userName}`)
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
    fetch('/responses', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  }
  render() {
    return (
      <View className="dashboard-main">
        <Text> DashBoard here </Text>
        <Questions
          data={this.state.questions}
          responses={this.state.responses}
          updateResponses={this.updateUserResponses}
        />
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
