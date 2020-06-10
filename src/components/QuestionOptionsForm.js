import React, { Component } from "react";
import { handleAddQuestionAnswer } from "../actions/quiestions";
import { connect } from "react-redux";

class QuestionOptionsForm extends Component {
  state = {
    answer: "",
    isReadyToSubmit: "disabled",
  };

  handleChangeDisbleSubmit = () => {
    const { answer } = this.state;
    let isReadyToSubmit = "disabled";
    if (answer) {
      isReadyToSubmit = "";
    }
    this.setState({ isReadyToSubmit });
  };

  handleChange = (e) => {
    this.setState({ answer: e.target.value });
    this.handleChangeDisbleSubmit();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { answer } = this.state;
    const { dispatch, questionId } = this.props;

    dispatch(handleAddQuestionAnswer(questionId, answer));
  };

  render() {
    const { optionOne, optionTwo } = this.props;
    return (
      <div>
        <h2>Would You Rather...</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="option">
            <input
              type="radio"
              name="option"
              value="optionOne"
              onChange={this.handleChange}
            />
            {optionOne}
          </div>
          <div className="option">
            <input
              type="radio"
              name="option"
              value="optionTwo"
              onChange={this.handleChange}
            />
            {optionTwo}
          </div>
          <button className="boton">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(QuestionOptionsForm);
