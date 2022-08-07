import './Footer.scss';
import tg from '../../img/footer/tg.svg';
import icon from '../../img/footer/icon.svg';
import vk from '../../img/footer/vk.svg';

const Footer = () => {
    return (
        <div className="Footer wrapper">
            <div className="Footer__content">
                <div className="social">
                    <p>Наши соцсети:</p>
                    <a href="#">
                        <img src={tg} alt="tg" />
                    </a>
                    <a href="#">
                        <img src={icon} alt="icon" />
                    </a>
                    <a href="#">
                        <img src={vk} alt="vk" />
                    </a>
                </div>
                <nav>
                    <a href="">Главная</a>
                    <a href="">Личный кабинет</a>
                    <a href="">Контакты</a>
                    <a href="">Конфиденциальность</a>
                </nav>
                <button
                    className="toTopBtn"
                    onClick={() => window.scrollTo(0, 0)}
                ></button>
            </div>
            <p className="copyright">@ Все права защищены. ООО”Слонум” 2022</p>
        </div>
    );
};

export default Footer;
