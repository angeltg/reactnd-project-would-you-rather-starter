import React from "react";

const UserCardRank = (props) => {
  const { name, avatarURL, answersTotal, questionsTotal, total } = props.user;
  return (
    <div className="content">
      <div className="user-card-rank">
        <div className="authoAvatar">
          <img src={avatarURL} alt={name} />
        </div>
        <div className="userDataRank">
          <h2>{name}</h2>
          <p>Answered questions {answersTotal}</p>
          <p>Created questions {questionsTotal}</p>
        </div>
        <div className="totalRank">
          Score
          <div className="signals">{total}</div>
        </div>
      </div>
    </div>
  );
};

export default UserCardRank;
