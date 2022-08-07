import React from 'react';
import Agreement from '../Agreement/Agreement';
import Input from '../Input/Input';
import './Sending.scss';

const Sending = () => {
    return (
        <div className="Sending wrapper">
            <div className="Sending__content">
                <h2>Подпишись на нашу рассылку</h2>
                <p>
                    Обещаем присылать только самое важное <br /> и интересное :)
                </p>
                <form>
                    <Input placeholder="Email" type="email" />
                    <button className="bigBtn">Отправить</button>
                </form>
                <Agreement />
            </div>
        </div>
    );
};

export default Sending;
