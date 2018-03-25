import React from 'react';
import './dashboard.css';

// options: Array[4]
// question: "What is the capital of India"
// questionid: 12

const Questions = (props) => {
  const { data, responses } = props;
  const questionBox = data.map((questions, index) => {
    const questionTitle = <div className="Question-index">Questions {index + 1}</div>;
    const questionText = <div className="Question-text"> {questions.question} </div>;
    const optionArray = questions.options;
    const optionDiv = optionArray.map(e => (
      <label className="Question-options-container">
        <input
          type="radio"
          value={e}
          key={questions.questionid}
          className="Question-options-elem"
          checked={responses[questions.questionid] === e}
          onClick={(event) => {
            responses[questions.questionid] = (event.target.value);
            props.updateResponses(responses, questions.questionid);
          }}
        />
        &nbsp;{e}<br />
      </label>
    ));
    return (
      <div className="questionBox" key={questions.questionid}>
        {questionTitle}
        {questionText}
        <div className="Question-options">
          {optionDiv}
        </div>
      </div>
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
    fetch('/fetch').then(res => res.json())
      .then((questions) => {
        this.updateQuestions(questions);
        fetch(`/responses/${this.props.userName}`).then(res => res.json())
          .then((responses) => {
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
      <div className="dashboard-main">
        <Questions
          data={this.state.questions}
          responses={this.state.responses}
          updateResponses={this.updateUserResponses}
        />
        <button
          className="dashboard-btn"
          disabled={!(this.state.questions.length === Object.keys(this.state.responses).length)}
          onClick={() => {
            calculateScore(this.props.userName).then((score) => {
              this.props.changePage(score);
            });
          }}
        >
        Calculate
        </button>
      </div>
    );
  }
}

export default DashBoard;
