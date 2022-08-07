import BenefitCard from '../BenefitCard/BenefitCard';
import './Benefits.scss';

import star from '../../img/benefits/star.svg';
import winne from '../../img/benefits/winne.svg';
import certification from '../../img/benefits/certification.svg';
import gift from '../../img/benefits/gift.svg';
import email from '../../img/benefits/email.svg';
import vk from '../../img/benefits/vk.svg';

const Benefits = () => {
    interface IBenefit {
        img: string;
        alt: string;
        text: string;
        link?: { text: string; url: string };
    }
    const benefits: IBenefit[] = [
        {
            img: star,
            alt: 'star',
            text: 'Шанс занять 1 место — в вашем городе и по всей России',
        },
        {
            img: winne,
            alt: 'winne',
            text: 'Развитие самостоятельности + свободное время для родителей ;)',
        },
        {
            img: certification,
            alt: 'certification',
            text: 'Персональный диплом в разных номинациях каждому участнику',
        },
        {
            img: gift,
            alt: 'gift',
            text: 'Призы и скидки для подписчиков и авторизованных пользователей',
        },
        {
            img: email,
            alt: 'email',
            text: 'Бесплатный диплом на email — через 1 день после конкурса',
        },
        {
            img: vk,
            alt: 'vk',
            text: 'Публикация работ победителей во ВКонтакте. ',
            link: { text: 'Подписывайтесь!', url: '#' },
        },
    ];

    return (
        <div className="Benefits wrapper">
            <h2>
                Для чего <span>нужно</span> участвовать
            </h2>

            <div className="Benefits__list">
                {benefits.map((benefit, i) => (
                    <BenefitCard props={benefit} key={i} />
                ))}
            </div>
        </div>
    );
};

export default Benefits;
