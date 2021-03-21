import React, { useState } from 'react';

const SortProduct = (props) => {
    const [value, setValue]=useState(1);

    const onSortProduct = () => {
        const sort={
            by: 'sort',
            value: value
        }
        props.onSort(sort);

    }   

    return (
        <div className="third_fillter">
            <h4>SORT BY :</h4>
            <select className="selectpicker" name="sortProduct" onChange={(e) => setValue(e.target.value)} value={value} onClick={onSortProduct} >
                <option value={1}>A - Z</option>
                <option value={-1}>Z - A</option>
            </select>
            

        </div>
    )
}


export default SortProduct;
