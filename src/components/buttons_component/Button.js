import React from 'react';
import './Button.css'
const Button = ({btnName}) => {
    return (
        <button className="py-1 px-3 button">{btnName}</button>
    );
}

export default Button;
