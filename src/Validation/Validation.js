import React from 'react';

const validation = ({inputLenght}) => {
    let validationMessage = <p>text long enough!</p>
    if(inputLenght<=5) {
        validationMessage = <p>text too short</p>
    }
    return(
    <div>
        {validationMessage}
    </div>
    )
}

export default validation;