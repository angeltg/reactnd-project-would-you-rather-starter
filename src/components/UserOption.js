import React, { Component } from "react";
import { connect } from "react-redux";

class UserOption extends Component {
  render() {
    const { name, id } = this.props.user;
    return <option value={id}>{name}</option>;
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  return {
    user,
  };
}

export default connect(mapStateToProps)(UserOption);
