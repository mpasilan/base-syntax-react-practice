import React from 'react';

import './Char.css';

const char = ({character, onClick}) => {
 return(
    <div className = "Char" onClick = {onClick}>
        {character}
    </div>
 )
}

export default char;