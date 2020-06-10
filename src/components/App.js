import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";

import "../App.css";

import { handleInitialData } from "../actions/shared";
import Loggin from "./Loggin";
import Question from "./Question";
import UsersRank from "./UsersRank";
import QuestionsLists from "./QuestionsLists";
import NewQuestion from "./NewQuestion";
import Header from "./Header";
import pageNotFound from "./PageNotFound";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <div className="App">
          {this.props.loadding ? (
            <Loggin />
          ) : (
            <Fragment>
              <Header />
              <Switch>
                <Route path="/" exact component={QuestionsLists} />
                <Route path="/question/:id" component={Question} />
                <Route path="/add" component={NewQuestion} />
                <Route path="/leaderboard" component={UsersRank} />
                <Route exact component={pageNotFound} />
              </Switch>
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loadding: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
