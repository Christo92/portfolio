import React from 'react';
// React-rotating-text
import ReactRotatingText from 'react-rotating-text';

const TypeWritter = () => {

    const sentences = [
        'Bonjour à tous !',
        'Je suis Christopher',
        'Bienvenue sur mon portfolio'
    ];

    return (
        <div className="typewritter">
            <ReactRotatingText className="typewritter__sentences" emptyPause={2000} items={sentences} />
        </div>
    );
}

export default TypeWritter;