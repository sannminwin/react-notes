import React from 'react';
import './item.scss';

const Item = (props) => {
    console.log(props);
    return (
        <div className="item"> {props.title} </div>
        )
}

export default Item;