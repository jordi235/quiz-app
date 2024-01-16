// StartPage.js
import React from 'react';
import '../../assets/images/logo.png';
import logo from '../../assets/images/logo.png';
import '../../style/start.css';

const StartPage = ({ startQuiz }) => {
    return (
        /*<div className="start-container">
            <h1>Witaj w Quizie React!</h1>
            <p>Naciśnij przycisk, aby rozpocząć quiz.</p>
            <button className="start-button" onClick={startQuiz}>
                Rozpocznij Quiz
            </button>
        </div>*/


        <div className='start-menu'>
            <div className='logo'>
                <img src={logo}></img>
            </div>
            <ul>
                <li onClick={startQuiz}>
                    QUIZY
                </li>
                <li onClick={startQuiz}>
                    USTAWIENIA
                </li>
                <li onClick={startQuiz}>
                    TWÓRCY
                </li>
            </ul>
        </div>

    );
};

export default StartPage;
