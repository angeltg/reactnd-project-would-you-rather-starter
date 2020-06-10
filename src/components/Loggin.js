import React, { Component } from "react";
import { connect } from "react-redux";
import UserOption from "./UserOption";
import { setAuthedUser } from "../actions/authedUser";

class Loggin extends Component {
  state = {
    authedUser: "",
  };

  handleChange = (e) => {
    const authedUser = e.target.value;
    this.setState({ authedUser });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.authedUser) {
      const { dispatch } = this.props;
      const authedUser = this.state.authedUser;
      dispatch(setAuthedUser(authedUser));
    }
  };

  render() {
    return (
      <div className="content">
        <div className="App-header">
          <h3>Welcome to Would you rather!</h3>
          <p>Select your user</p>
          <div>
            <form onSubmit={this.handleSubmit}>
              <select
                className="selectUser"
                name="select"
                onChange={(e) => this.handleChange(e)}
              >
                <option value="">Select user</option>
                {this.props.usersIds.map((user) => (
                  <UserOption key={user} id={user} />
                ))}
              </select>
              <button type="submit" className="boton">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    usersIds: Object.keys(users).sort(users.name),
  };
}

export default connect(mapStateToProps)(Loggin);
