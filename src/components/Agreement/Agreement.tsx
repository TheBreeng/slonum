import Checkbox from '../Checkbox/Checkbox';

import './Agreement.scss';

const Agreement = () => {
    return (
        <div className="Agreement">
            <Checkbox />
            <p>
                Отправляя данные я соглашаюсь с{' '}
                <a href="#">Условиями конкурса</a>
                <br />и <a href="#">Политикой обработки данных</a>
            </p>
        </div>
    );
};

export default Agreement;
