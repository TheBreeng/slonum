import './FAQ.scss';

import FAQItem, { IFAQ } from '../FAQItem/FAQItem';

const FAQ = () => {
    const FAQ: IFAQ[] = [
        {
            tittle: 'Может ли ребёнок заниматься самостоятельно?',
            text: 'Оплатить могут только авторизованные пользователи. Оплата совершается с помощью сервиса SberPay. Данный сервис позволит быстро и безопасно оплатить заявку.',
        },
        {
            tittle: 'Как происходит оплата?',
            text: 'Оплатить могут только авторизованные пользователи. Оплата совершается с помощью сервиса SberPay. Данный сервис позволит быстро и безопасно оплатить заявку.',
        },
        {
            tittle: 'Есть ли гарантии усвоения материала?',
            text: 'Оплатить могут только авторизованные пользователи. Оплата совершается с помощью сервиса SberPay. Данный сервис позволит быстро и безопасно оплатить заявку.',
        },
        {
            tittle: 'С кем будет общаться мой ребёнок?',
            text: 'Оплатить могут только авторизованные пользователи. Оплата совершается с помощью сервиса SberPay. Данный сервис позволит быстро и безопасно оплатить заявку.',
        },
        {
            tittle: 'Каковы принципы обучения?',
            text: 'Оплатить могут только авторизованные пользователи. Оплата совершается с помощью сервиса SberPay. Данный сервис позволит быстро и безопасно оплатить заявку.',
        },
        {
            tittle: 'Сколько раз в неделю можно заниматься?',
            text: 'Оплатить могут только авторизованные пользователи. Оплата совершается с помощью сервиса SberPay. Данный сервис позволит быстро и безопасно оплатить заявку.',
        },
    ];

    return (
        <div className="FAQ wrapper">
            <h2>Вопрос/Ответ</h2>
            {FAQ.map((item, i) => (
                <FAQItem tittle={item.tittle} text={item.text} key={i} />
            ))}
        </div>
    );
};

export default FAQ;