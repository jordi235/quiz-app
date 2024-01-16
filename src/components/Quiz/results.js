import React from 'react';

const Results = ({ score, totalQuestions }) => {
  return (
    <div>
      <h1>Wyniki quizu</h1>
      <p>Twój wynik: {score} z {totalQuestions}</p>
    </div>
  );
};

export default Results;
