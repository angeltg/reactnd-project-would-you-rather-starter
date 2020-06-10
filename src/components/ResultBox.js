import React from "react";
import Graph from "./Graph";

const ResultBox = (props) => {
  const { isAuthdeUserInResult, percent, votes, text, total } = props;

  return (
    <div className="resultbox">
      <div className="textAnswerResult">
        {text}
        {isAuthdeUserInResult && <div className="signal"></div>}
      </div>
      <Graph percent={percent} />
      {votes} / {total}
    </div>
  );
};

export default ResultBox;
