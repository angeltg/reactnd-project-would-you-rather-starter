import React, { Component } from "react";
import { connect } from "react-redux";
import { getRank } from "../utils/helpers";
import UserCardRank from "./UserCardRank";

class UserRank extends Component {
  render() {
    return (
      <div className="App-header">
        <h2>User rank</h2>
        {this.props.usersRank.map((user) => (
          <UserCardRank user={user} key={user.id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    usersRank: getRank(users),
  };
}

export default connect(mapStateToProps)(UserRank);
