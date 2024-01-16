// Quiz.js
import React, { useCallback, useEffect, useState } from 'react';
import '../../style/quiz.css';
import allQuestions from '../../utils/questions';
import ProgressBar from './progessBar';
import Question from './question';
import Results from './results';
import StartPage from './startPage';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [quizStarted, setQuizStarted] = useState(false);
    const [quizFinished, setQuizFinished] = useState(false);
    const [questions, setQuestions] = useState([]);

    const shuffleQuestions = useCallback((questions) => {
        const shuffledQuestions = [...questions];
        for (let i = shuffledQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
            shuffledQuestions[i].options = shuffleOptions(shuffledQuestions[i].options);
        }
        return shuffledQuestions;
    }, []);

    const shuffleOptions = (options) => {
        const shuffledOptions = [...options];
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }
        return shuffledOptions;
    };

    useEffect(() => {
        const shuffledQuestions = shuffleQuestions(allQuestions);
        const selectedQuestions = shuffledQuestions.slice(0, 15);
        setQuestions(selectedQuestions);
    }, [shuffleQuestions]);

    const handleAnswerClick = (selectedOption) => {
        setSelectedAnswer(selectedOption);
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    const startQuiz = () => {
        setQuizStarted(true);
    };

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

    const handleRestartQuiz = () => {
        const shuffledQuestions = shuffleQuestions(allQuestions);
        const selectedQuestions = shuffledQuestions.slice(0, 15);
        setQuestions(selectedQuestions);
        setCurrentQuestion(0);
        setScore(0);
        setSelectedAnswer(null);
        setQuizFinished(false);
        setQuizStarted(false);
    };

    const renderQuizContent = () => {
        if (!quizStarted) {
            return <StartPage startQuiz={startQuiz} />;
        } else if (!quizFinished && questions[currentQuestion]) {
            return (
                <>
                    <ProgressBar progress={progress} />
                    <Question
                        question={questions[currentQuestion].question}
                        options={questions[currentQuestion].options}
                        selectedAnswer={selectedAnswer}
                        handleAnswerClick={handleAnswerClick}
                    />
                    <button className="quiz-button" onClick={handleNextQuestion}>
                        Następne pytanie
                    </button>
                </>
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

    return <div className='main'>{renderQuizContent()}</div>;
};

export default Quiz;
