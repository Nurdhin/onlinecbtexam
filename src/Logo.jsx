import React from 'react'

const Logo = (props) => {
    return(
        <div className="logo">
            <a href="#" >{props.logo}<span>{props.name}</span></a>
        </div>
    );
};
export default Logo