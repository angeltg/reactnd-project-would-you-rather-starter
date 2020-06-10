import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestionList } from "../utils/helpers";
import QuestionsList from "./QuestionsList";

class QuestionsLists extends Component {
  state = {
    showQuestionsListAnswered: false,
  };

  handleChangeList = () => {
    this.setState({
      showQuestionsListAnswered: !this.state.showQuestionsListAnswered,
    });
  };

  render() {
    const { unansweredQuestions, answeredQuestions } = this.props;
    return (
      <div className="question-list-wall">
        <nav>
          <ul>
            <li
              className={
                !this.state.showQuestionsListAnswered ? "active" : null
              }
              onClick={
                this.state.showQuestionsListAnswered
                  ? this.handleChangeList
                  : null
              }
            >
              Unanswered questions
            </li>
            <li
              className={this.state.showQuestionsListAnswered ? "active" : null}
              onClick={
                !this.state.showQuestionsListAnswered
                  ? this.handleChangeList
                  : null
              }
            >
              Answered questions
            </li>
          </ul>
        </nav>
        {this.state.showQuestionsListAnswered ? (
          <QuestionsList questions={answeredQuestions} />
        ) : (
          <QuestionsList questions={unansweredQuestions} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const { unansweredQuestions, answeredQuestions } = formatQuestionList(
    questions,
    users[authedUser],
    users
  );
  return {
    unansweredQuestions,
    answeredQuestions,
  };
}

export default connect(mapStateToProps)(QuestionsLists);
