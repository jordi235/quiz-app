const Question = ({ question, options, selectedAnswer, handleAnswerClick }) => {
  return (
    <div className="quiz-container" style={{ position: 'relative' }}>
      <h1>Cyberquiz</h1>
      <p>{question}</p>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(option)}
            className={`quiz-option ${selectedAnswer === option ? 'selected' : ''}`}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
