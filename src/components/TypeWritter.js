import React from 'react';
// React-rotating-text
import ReactRotatingText from 'react-rotating-text';

function TypeWritter() {

    const sentences = [
        'Bonjour à tous !',
        'Je suis Christopher',
        'Voici mon portfolio'
    ];

    return (
        <div className="typewritter">
            <ReactRotatingText className="typewritter__sentences" emptyPause={2000} items={sentences} />
        </div>
    );
}

export default TypeWritter;