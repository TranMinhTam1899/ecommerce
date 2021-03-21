import React from 'react';

const ButtonIcon=(props)=> {
    
    const {Type, Title, Icon, className, id}=props;

    return (
        <button type={Type} className={className} id={id}>
            <i className={`fa ${Icon}`} aria-hidden="true" style={{ marginRight: 5 }}></i>
            {Title}
        </button>
    )
}

export default ButtonIcon;
