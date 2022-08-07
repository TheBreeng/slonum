import './Diploma.scss';
import diploma from '../../img/diploma/diploma.png';

const Diploma = () => {
    return (
        <div className="Diploma wrapper">
            <div className="Diploma__text">
                <h2>
                    Выдаём <span>дипломы</span> участникам
                </h2>
                <p>
                    Жюри конкурса рассмотрит работы и выделит победителей по
                    городам и возрастным категориям, а также определит другие
                    номинации, подчеркнув уникальную особенность каждого
                    конкретного рисунка — дипломы получат все дети! <br />
                    <br />
                    Скачать диплом можно будет в личном кабинете через сутки
                    после окончания конкурса, дополнительно вышлем его на
                    e-mail. <br />
                    <br /> Со слоном к победам напролом!
                </p>
            </div>

            <img src={diploma} alt="diploma" />
        </div>
    );
};

export default Diploma;
