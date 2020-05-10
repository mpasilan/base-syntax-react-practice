import React from 'react';

import './UserOutput.css'
const useroutput = ({username}) => {
    const style = {
        textAlign:'left',
        fontSize:'30px',
        backgroundColor: 'grey'
       
    };
    return (
        <div className="Output">
            
            <h4 style={style}>{username}</h4>
            <p>
            They rushed out the door, grabbing anything and 
            everything they could think of they might need.
            There was no time to double-check to make sure they
             eren't leaving something important behind. 
            Everything was thrown into the car and they sped off. 
            Thirty minutes later they were safe and that was when it
            dawned on them that they had forgotten the most important
            thing of all.
            </p>

            <p>
            It's not only writers who can benefit from this free 
            online tool. If you're a programmer who's working on 
            a project where blocks of text are needed, this tool 
            can be a great way to get that. It's a good way to test 
            your programming and that the tool being created is 
            working well
            </p>

        </div>
    )
};

export default useroutput;