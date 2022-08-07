import './FAQItem.scss';

import { FC, useState } from 'react';

export interface IFAQ {
    tittle: string;
    text: string;
}

const FAQItem: FC<IFAQ> = ({ tittle, text }) => {
    const [show, setShow] = useState(false);

    const showText = () => {
        show ? setShow(false) : setShow(true);
    };

    return (
        <div className="FAQItem">
            <div className="FAQItem__text">
                <p>{tittle}</p>
                <p className={show ? 'FAQItem__show' : 'FAQItem__hide'}>
                    {text}
                </p>
            </div>
            <button
                className={show ? 'FAQItem__show-btn' : 'FAQItem__hide-btn'}
                onClick={showText}
            ></button>
        </div>
    );
};

export default FAQItem;
