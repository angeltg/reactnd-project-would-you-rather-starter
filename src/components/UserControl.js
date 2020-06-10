import React, { Component } from "react";
import { connect } from "react-redux";

import { setAuthedUser } from "../actions/authedUser";

class UserControl extends Component {
  handleLoguot = () => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(null));
  };

  render() {
    const { authedUser } = this.props;

    return (
      <div className="userControl">
        Hello, {authedUser.name}
        <div className="authoAvatar mini">
          <img src={authedUser.avatarURL} alt={authedUser.name} />
        </div>
        <div className="logout" onClick={this.handleLoguot}>
          Loguot
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return { authedUser: users[authedUser] };
}

export default connect(mapStateToProps)(UserControl);
