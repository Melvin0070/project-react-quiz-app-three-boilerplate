import React, { Component } from 'react';
import "./Quiz.css";
import questions from "../resources/quizQuestion.json";
import { Link } from "react-router-dom";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      score: 0,
      questionsAttempted: 0,
    };
  }

  handlePrevious = () => {
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion - 1,
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion + 1,
    }));
  };

  handleQuit = () => {
    const confirm = window.confirm("Are you sure you want to quit?")
    if (confirm) {
      this.setState({ index: 0, attempted: 0, score: 0 })
    }
  }

handleOptionClick = (selectedOption) => {
    const { currentQuestion, score, questionsAttempted } = this.state;
    const question = questions[currentQuestion];

    if (selectedOption === question.answer) {
      this.setState((prevState) => ({
        score: prevState.score + 1,
      }));
      alert("Correct Answer!");
    } else {
      alert("Wrong Answer!");
    }
    

    if (currentQuestion === questions.length - 1) {
        console.log("Click Finish")
    } else {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        questionsAttempted: prevState.questionsAttempted + 1,
      }));
    }
  };



  render() {
    const { currentQuestion, score } = this.state;
    const question = {
      ...questions[currentQuestion],
    };

    return (
      <div>
        <div className="question">
          <h1>Question</h1>
          <div>
            <p className='questionNumber'>{currentQuestion + 1} of 15</p>
            <h2>{question.question}</h2>
          </div>

          <div className="optionsContainer">
            <button className="option" onClick={() => this.handleOptionClick(question.optionA)}>
              {question.optionA}
            </button>
            <button className="option" onClick={() => this.handleOptionClick(question.optionB)}>
              {question.optionB}
            </button>
            <button className="option" onClick={() => this.handleOptionClick(question.optionC)}>
              {question.optionC}
            </button>
            <button className="option" onClick={() => this.handleOptionClick(question.optionD)}>
              {question.optionD}
            </button>
          </div>

          <div className="buttonsBox">
            <button className="previous" onClick={this.handlePrevious} disabled={currentQuestion === 0}>Previous</button>
            <button className="next" onClick={this.handleNext} disabled={currentQuestion === questions.length - 1}>Next</button>
            <Link to="/">
              <button className="quit" onClick={this.handleQuit}>Quit</button>
            </Link>
            <Link to="/result" state={{score: this.state.score, questionsAttempted: this.state.questionsAttempted }}>
  <button className='finish'>Finish</button>
</Link>

          </div>
        </div>
      </div>
    )
  }
}
