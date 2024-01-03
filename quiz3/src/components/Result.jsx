import React from 'react';
import "./Results.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation()
  const { score, questionsAttempted } = location.state || {}



  return (
    <div className='result'>
      <h1>Result</h1>
      <div className='resultContainer'>
        <h2></h2>
        <h1>Your Score is {Math.floor ((score*100)/15)}%</h1>        <div className='stats'>
          <div className='leftStats'>
            <p>Total number of questions</p>
            <p>Number of questions attempted</p>
            <p>Number of correct questions</p>
            <p>Number of wrong answers</p>
          </div>
          <div className='rightStats'>
            <p>15</p>
            <p>{questionsAttempted}</p>
            <p>{score}</p>
            <p>{questionsAttempted - score}</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/quiz">
          <button className="play">Play Again</button>
        </Link>
        <Link to="/">
          <button className="home">Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
