import React, { useState } from 'react';
import InputRange from 'react-input-range';

const FilterProduct = (props) => {

    const [filterName, setFilterName] = useState('');
    const [value, setValue]=useState({
        min: 0,
        max:1000
    })

    const onChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        props.onFilter(
            name === 'filter' ? value : filterName
        )
        setFilterName(value);
    }

    const onChangeFilterPrice=(value)=>{
        setValue(value);
        props.onFilterPrice(value);
    }
    
   



    return (
        <div>
            <aside className="l_widgest l_fillter_widget">
                <div className="l_w_title">
                    <h3>Search</h3>
                </div>
                <form className="frmSearchFilter"  >
                    <input type="text" id="searchProduct" className="form-control"
                        name="filter"
                        placeholder="Enter your search"
                        onChange={onChange}
                        value={filterName}
                    />
                    <button type="button" className="btnSearch">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </form>
            </aside>
            <aside className="l_widgest l_fillter_widget">
                <div className="l_w_title">
                    <h3>Filter price</h3>
                </div>
                <div className="filter_content">
                    <InputRange id="filterPriceSele" name="filterPrice"
                        formatLabel={value => `${value}$`}
                        maxValue={1000}
                        minValue={0}
                        value={value}
                        onChange={(value)=>onChangeFilterPrice(value)} />
                </div>
               
            </aside>
        </div>
    )
}



export default (FilterProduct);