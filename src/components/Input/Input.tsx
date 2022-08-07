import { useState } from 'react';
import './Input.scss';

export interface Iinputs {
    placeholder: string;
    type: string;
}

const Input = ({ placeholder, type }: Iinputs) => {
    const [value, setValue] = useState('');

    return (
        <div className="Input">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};

export default Input;
