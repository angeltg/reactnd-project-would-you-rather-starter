import React from "react";

import ResultBox from "./ResultBox";
import { percent } from "../utils/helpers";

const QuestionResults = (props) => {
  const { optionOne, optionTwo, authedUser } = props;

  const totalOptionOne = optionOne.votes.length;
  const totalOptionTwo = optionTwo.votes.length;
  const total = optionOne.votes.length + optionTwo.votes.length;

  const isAuthdeUserInResult = (votes) => {
    return votes.find((user) => user === authedUser);
  };

  const percentOne = percent(totalOptionOne, total);
  const percentTwo = percent(totalOptionTwo, total);

  return (
    <div className="results">
      <h2>Results:</h2>

      <ResultBox
        votes={optionOne.votes.length}
        text={optionOne.text}
        isAuthdeUserInResult={isAuthdeUserInResult(optionOne.votes)}
        percent={percentOne}
        total={total}
      />

      <ResultBox
        votes={optionTwo.votes.length}
        text={optionTwo.text}
        isAuthdeUserInResult={isAuthdeUserInResult(optionTwo.votes)}
        percent={percentTwo}
        total={total}
      />
    </div>
  );
};

export default QuestionResults;
