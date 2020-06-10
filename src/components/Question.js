import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { formatQuestion, isQuestionAnswered } from "../utils/helpers";

import QuestionOptionsForm from "./QuestionOptionsForm";
import QuestionResults from "./QuestionResults";

class Question extends Component {
  render() {
    const { question, authedUser, answered } = this.props;
    if (question === null) return <Redirect to="/" />;
    const { id, name, avatar, optionOne, optionTwo } = question;

    return (
      <div className="content">
        <div className="quiestionCard">
          <div className="author">{name} ask:</div>
          <div className="question">
            <div className="authoAvatar">
              <img src={avatar} alt={name} />
            </div>

            {!answered ? (
              <QuestionOptionsForm
                questionId={id}
                optionOne={optionOne.text}
                optionTwo={optionTwo.text}
              />
            ) : (
              <QuestionResults
                optionOne={optionOne}
                optionTwo={optionTwo}
                authedUser={authedUser}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const questionId = props.match.params.id;
  const question = questions[questionId];
  const answered = isQuestionAnswered(questionId, users, authedUser);
  //const question = getOneQuestionUnanswered(questions, authedUser, users);
  return {
    authedUser,
    answered,
    question: question ? formatQuestion(question, users) : null,
  };
}

export default connect(mapStateToProps)(Question);
