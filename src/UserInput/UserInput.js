import React from 'react';
import './UserInput.css';

const userinput = (props) => {
    const {onChange, username} = props;
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '10px',
      cursor:'pointer'
    };
return (
    <div className="Input">
        <input type="text" onChange={onChange} value={username} style = {style}/>

    </div>
)
};

export default userinput;