import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/quiestions";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    options: {
      optionOne: "",
      optionTwo: "",
    },
    isReadyToSubmit: "disabled",
    redirect: false,
  };

  handleChangeDisbleSubmit = () => {
    const { optionOne, optionTwo } = this.state.options;
    let isReadyToSubmit = "disabled";
    if (optionOne && optionTwo) {
      isReadyToSubmit = "";
    }
    this.setState({ isReadyToSubmit });
  };

  handleChange(e) {
    let options = this.state.options;
    options[e.target.name] = e.target.value;
    this.setState({ options: options });
    this.handleChangeDisbleSubmit();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { options } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(options));
    this.setState({
      options: {
        optionOne: "",
        optionTwo: "",
      },
      isReadyToSubmit: "disabled",
      redirect: true,
    });
  };

  render() {
    const { options, isReadyToSubmit, redirect } = this.state;
    const { optionOne, optionTwo } = options;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="content">
        <div className="quiestionCard">
          <h2>Create New Question</h2>
          <p>Complete the question</p>

          <h3>Would you rather ...</h3>
          <form className="newQuestion" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="optionOne"
              onChange={(e) => this.handleChange(e)}
              placeholder="Enter option one text here"
              value={optionOne}
            />
            or
            <input
              type="text"
              name="optionTwo"
              onChange={(e) => this.handleChange(e)}
              placeholder="Enter option one text here"
              value={optionTwo}
            />
            <button className="boton" type="submit" disabled={isReadyToSubmit}>
              Submits
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(NewQuestion);
