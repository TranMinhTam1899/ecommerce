import React from 'react'

const Img = (props) => {
    const { Url, Width='max-context', Style } = props;
    return (
        <img src={Url}  width={Width}  style={{ Style }}   alt="" />
    )
}

export default Img;