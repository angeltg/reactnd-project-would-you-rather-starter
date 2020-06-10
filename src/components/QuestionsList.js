import React from "react";
import { Link } from "react-router-dom";

const QuestionsUnanswered = (props) => {
  const { questions } = props;

  return (
    <div className="questions">
      {questions.map((question) => (
        <div key={question.id} className="quiestionCard">
          <div className="author">{question.name} ask:</div>
          <div className="question">
            <div className="authoAvatar">
              <img src={question.avatarURL} alt={question.name} />
            </div>
            <div className="questionPrevisual">
              <h2>Would you rather</h2>
              <p>{question.optionOneText}...</p>
              <Link className="boton" to={`/question/${question.id}`}>
                View full
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionsUnanswered;
