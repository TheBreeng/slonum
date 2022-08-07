import './Header.scss';
import logo from '../../img/header/logo.png';
import airplanes from '../../img/header/airplanes.png';
import airplane from '../../img/header/space/airplane.svg';
import alarm from '../../img/header/space/alarm.svg';
import atom from '../../img/header/space/atom.svg';
import balloon from '../../img/header/space/balloon.svg';
import bigPlanet from '../../img/header/space/bigPlanet.svg';
import bulb from '../../img/header/space/bulb.svg';
import darkPlanet from '../../img/header/space/darkPlanet.svg';
import elephant from '../../img/header/space/elephant.svg';
import palette from '../../img/header/space/palette.svg';
import rocket from '../../img/header/space/rocket.svg';
import smallPlanet from '../../img/header/space/smallPlanet.svg';
import plus from '../../img/header/space/plus.svg';
import division from '../../img/header/space/division.svg';
import pen from '../../img/header/pen.svg';

import Countdown, { zeroPad } from 'react-countdown';
import { numWord } from '../../functions/functions';

const Header = () => {
    interface IcountdownRenderer {
        days: number;
        hours: number;
        minutes: number;
    }
    const countdownRenderer = ({
        days,
        hours,
        minutes,
    }: IcountdownRenderer) => (
        <div className="timer">
            <div>
                {zeroPad(days)}
                <p>{numWord(days, ['день', 'дня', 'дней'])}</p>
            </div>
            <span className="animate__animated animate__fadeIn animate__infinite">
                :
            </span>
            <div>
                {zeroPad(hours)}
                <p>{numWord(hours, ['час', 'часа', 'часов'])}</p>
            </div>
            <span className="animate__animated animate__fadeIn animate__infinite">
                :
            </span>
            <div>
                {zeroPad(minutes)}
                <p>{numWord(minutes, ['минута', 'минуты', 'минут'])}</p>
            </div>
        </div>
    );

    return (
        <div className="Header wrapper">
            <nav>
                <img src={logo} alt="СлонУМ" className="logo" />
                <button className="smallBtn changeBtnColor">Войти</button>
            </nav>

            <div className="Header__description">
                <div className="text">
                    <p>От компании СлонУМ</p>
                    <h1>
                        Всероссийский конкурс <br /> Детского рисунка
                    </h1>
                    <p>
                        Участвуйте в конкурсе и получайте призы в различных
                        <br />
                        номинациях детского рисунка для всех возрастов
                    </p>

                    <div className="participate">
                        <button className="bigBtn">Участвовать</button>
                        <Countdown
                            date={Date.parse('10 Aug 2022 03:14:00 GMT')}
                            renderer={countdownRenderer}
                        />
                    </div>
                </div>
                <div className="images">
                    <img
                        src={airplanes}
                        alt="Самолетики"
                        className="airplanes"
                    />
                    <div className="girl">
                        <img src={pen} alt="pen" className="pen" />
                    </div>
                </div>
            </div>
            <div className="space animate__animated animate__fadeIn">
                <img src={airplane} alt="airplane" className="airplane" />
                <img src={alarm} alt="alarm" className="alarm" />
                <img src={atom} alt="atom" className="atom" />
                <img src={balloon} alt="balloon" className="balloon" />
                <img src={bigPlanet} alt="bigPlanet" className="bigPlanet" />
                <img src={bulb} alt="bulb" className="bulb" />
                <img src={darkPlanet} alt="darkPlanet" className="darkPlanet" />
                <img src={elephant} alt="elephant" className="elephant" />
                <img src={palette} alt="palette" className="palette" />
                <img src={rocket} alt="rocket" className="rocket" />
                <img src={plus} alt="plus" className="plus" />
                <img src={division} alt="division" className="division" />
                <img
                    src={smallPlanet}
                    alt="smallPlanet"
                    className="smallPlanet"
                />
            </div>
        </div>
    );
};

export default Header;
