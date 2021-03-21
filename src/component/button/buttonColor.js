import React from 'react'

 const ButtonColor=(props)=> {
    const { Color, className, id } = props;
    return (
        <span style={{ height: 28, width: 28, borderRadius: '50%', background: `${Color}` , display: 'inline-block' }} className={className} id={id} ></span>
    )
}
export default ButtonColor;