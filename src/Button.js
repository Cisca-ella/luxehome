import React, {useState} from 'react';
import './Section.css'

export default function Button() {
    const[buttonText, setButtonText] = useState('ADD TO CART');

    const handleClick = () => {
        setButtonText('ADDED');
    };
    
    return(
        <div>
            <button onClick={handleClick}>
                {buttonText}
            </button>
        </div>
    )
    
}