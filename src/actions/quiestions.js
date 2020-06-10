import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { receiveUsers } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(options) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const { optionOne, optionTwo } = options;

    dispatch(showLoading);

    return saveQuestion({
      author: authedUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      timestamp: Date.now(),
    })
      .then((question) => {
        dispatch(addQuestion(question));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function handleAddQuestionAnswer(questionId, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading);
    return saveQuestionAnswer({
      authedUser: authedUser,
      qid: questionId,
      answer,
    })
      .then((res) => {
        const { users, questions } = res;
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
      })
      .then(() => dispatch(hideLoading()));
  };
}
