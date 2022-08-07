import './Request.scss';
import vk from '../../img/request/vk.svg';
import ok from '../../img/request/ok.svg';
import airplane1Img from '../../img/request/airplane1.svg';
import airplane2Img from '../../img/request/airplane2.svg';
import airplaneImg from '../../img/request/airplane.svg';

import Input from '../Input/Input';
import { Iinputs } from '../Input/Input';
import Agreement from '../Agreement/Agreement';
import { useEffect, useRef } from 'react';

const Request = () => {
    const inputs: Iinputs[] = [
        { placeholder: 'ФИО ребёнка', type: 'text' },
        { placeholder: 'Дата рождения', type: 'text' },
        { placeholder: 'Город', type: 'text' },
        { placeholder: 'Email', type: 'email' },
        { placeholder: 'Пароль', type: 'password' },
    ];

    const observer = useRef<IntersectionObserver>();
    const airplanes = useRef<HTMLDivElement>(null!);
    const airplane = useRef<HTMLImageElement>(null!);
    const airplane1 = useRef<HTMLImageElement>(null!);
    const airplane2 = useRef<HTMLImageElement>(null!);

    useEffect(() => {
        const callback = (entries: any) => {
            if (entries[0].isIntersecting) {
                airplane.current.classList.add('airplaneAnimation');
                airplane1.current.classList.add('airplane1Animation');
                airplane2.current.classList.add('airplane2Animation');
            }
        };

        observer.current = new IntersectionObserver(callback);
        observer.current.observe(airplanes.current);
    }, []);

    return (
        <div className="Request wrapper">
            <div className="Request__price-block">
                <p>Скидка за репост</p>
                <p>Стоимость участия:</p>
                <p className="price">
                    149₽ <span>299₽</span>
                </p>
                <p>При наличии репоста в соцсетях :)</p>
                <div className="links">
                    <p>Получить скидку:</p>
                    <div>
                        <a href="#">
                            <img src={vk} alt="vk" />
                        </a>
                        <a href="#">
                            <img src={ok} alt="ok" />
                        </a>
                    </div>
                </div>
            </div>
            <form>
                <h2>Зарегистрируйтесь, чтобы участвовать</h2>
                {inputs.map((input, i) => (
                    <Input
                        key={i}
                        placeholder={input.placeholder}
                        type={input.type}
                    />
                ))}
                <Agreement />
                <button className="bigBtn">Участвовать</button>
                <div className="airplanes" ref={airplanes}>
                    <img
                        src={airplane1Img}
                        alt="airplane"
                        className="airplane1"
                        ref={airplane1}
                    />
                    <img
                        src={airplane2Img}
                        alt="airplane"
                        className="airplane2"
                        ref={airplane2}
                    />
                    <img
                        src={airplaneImg}
                        alt="airplane"
                        className="airplane0"
                        ref={airplane}
                    />
                </div>
            </form>
        </div>
    );
};

export default Request;
