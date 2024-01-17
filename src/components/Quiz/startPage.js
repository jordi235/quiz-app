import logo from '../../assets/images/logo.png';

const StartPage = ({ startQuiz }) => {
    return (
        <div className='start-menu'>
            <div className='logo'>
                <img src={logo}></img>
            </div>
            <ul>
                <li onClick={startQuiz}>
                    START
                </li>
            </ul>
        </div>

    );
};

export default StartPage;
