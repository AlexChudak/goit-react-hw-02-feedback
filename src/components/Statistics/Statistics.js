import React from 'react';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
   <div>
        <h1>Statistics</h1>
        <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total:{total}</p>
        <p>Positive Feedback: {positivePercentage}%</p>
        </div>
);







export default Statistics;