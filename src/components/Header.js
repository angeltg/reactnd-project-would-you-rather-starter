import React, { Component } from "react";

import UserControl from "./UserControl";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/add">New Question</NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard">Leader Board</NavLink>
            </li>
          </ul>
        </nav>
        <UserControl />
      </div>
    );
  }
}

export default connect()(Header);
