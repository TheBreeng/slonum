import { useState } from 'react';
import './Checkbox.scss';

const Checkbox = () => {
    const [isChecked, setCheck] = useState(true);

    const checked = () => {
        isChecked ? setCheck(false) : setCheck(true);
    };

    return (
        <div
            className={isChecked ? 'Checkbox Checkbox__checked' : 'Checkbox'}
            onClick={checked}
        ></div>
    );
};

export default Checkbox;
