import React, { useEffect, useState } from 'react';
import Results from './Results';
import allQuestions from './questions';
import './quiz.css';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [quizFinished, setQuizFinished] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const shuffledQuestions = shuffleQuestions(allQuestions);
        const selectedQuestions = shuffledQuestions.slice(0, 15);
        setQuestions(selectedQuestions);
    }, []);

    //losowanie kolejności pytań
    const shuffleQuestions = (questions) => {
        const shuffledQuestions = [...questions];
        for (let i = shuffledQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
            // Mieszanie opcji dla każdego pytania
            shuffledQuestions[i].options = shuffleOptions(shuffledQuestions[i].options);
        }
        return shuffledQuestions;
    };

    //losowanie kolejności odpowiedzi
    const shuffleOptions = (options) => {
        const shuffledOptions = [...options];
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }
        return shuffledOptions;
    };

    const handleAnswerClick = (selectedOption) => {
        setSelectedAnswer(selectedOption);
    };

    //pasek postępu
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    //kolejne pytanie - button
    const handleNextQuestion = () => {
        if (selectedAnswer === questions[currentQuestion]?.correctAnswer) {
            setScore(score + 1);
        }

        setSelectedAnswer(null);

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizFinished(true);
        }
    };

    //restart quiz'u
    const handleRestartQuiz = () => {
        const shuffledQuestions = shuffleQuestions(allQuestions);
        const selectedQuestions = shuffledQuestions.slice(0, 15);
        setQuestions(selectedQuestions);
        setCurrentQuestion(0);
        setScore(0);
        setSelectedAnswer(null);
        setQuizFinished(false);
    };

    //renderowanie quiz'u
    const renderQuizContent = () => {
        if (!quizFinished && questions[currentQuestion]) {
            return (
                <div className="quiz-container" style={{ position: 'relative' }}>
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                    <h1>Quiz React</h1>
                    <p>Pytanie {currentQuestion + 1}: {questions[currentQuestion].question}</p>
                    <ul>
                        {questions[currentQuestion].options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleAnswerClick(option)}
                                className={`quiz-option ${selectedAnswer === option ? 'selected' : ''}`}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                    <button className="quiz-button" onClick={handleNextQuestion}>
                        Następne pytanie
                    </button>
                </div>
            );
        } else {
            return (
                <div className="results-container">
                    <Results score={score} totalQuestions={questions.length} />
                    <button className="results-button" onClick={handleRestartQuiz}>
                        Rozpocznij od nowa
                    </button>
                </div>
            );
        }
    };

    return <div>{renderQuizContent()}</div>;
};

export default Quiz;
