const Results = ({ score, totalQuestions }) => {
  return (
    <div>
      <h1>Wyniki quizu</h1>
      <p>Twój wynik: <span className='results'>{score} z {totalQuestions}</span></p>
    </div>
  );
};

export default Results;
