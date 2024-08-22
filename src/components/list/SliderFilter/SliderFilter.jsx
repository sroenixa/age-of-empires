import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'; 
import './SliderFilter.scss'
import ReactSlider from "react-slider";

const SliderFilter = ({ text,callback,active,min,max }) => {
    const [isChecked, setIsChecked] = useState(!active);
    const [values, setValues] = useState([min, max]);
    
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        callback({title:text,values:values,checked:!isChecked})
    };

    const handleChange = (newValues) => {
        setValues(newValues)
        callback({title:text,values:newValues,checked:isChecked})
    };

    return (
        <div className='slider-filter'>
            <label>
                <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                />
                {text}
            </label>
            <ReactSlider
                className={`${!isChecked ? 'disabled' : ''} slider`}
                thumbClassName="thumb"
                trackClassName="track"
                max={max}
                min={min}
                values={values}
                minDistance={1}
                pearling
                defaultValue={[min, max]}
                onChange={handleChange}
            />
            <span>{isChecked ? `${values[0]} - ${values[1]}` : ''} </span>
        </div>
    )
}

SliderFilter.propTypes = {
    text: PropTypes.string.isRequired,  
    callback:PropTypes.func.isRequired,
    active:PropTypes.bool.isRequired,
    min: PropTypes.number.isRequired,  
    max: PropTypes.number.isRequired,  
};

export default SliderFilter