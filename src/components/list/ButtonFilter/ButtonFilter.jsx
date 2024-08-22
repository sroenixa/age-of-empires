import React from 'react'
import PropTypes from 'prop-types'; 
import './ButtonFilter.scss'

const ButtonFilter = ({ text,callback,active }) => {
  return (
    <button onClick={() => callback(text)} className={`${active ? 'active' : ''} button-filter`}>{text}</button>
  )
}

ButtonFilter.propTypes = {
    text: PropTypes.string.isRequired,  
    callback:PropTypes.func.isRequired,
    active:PropTypes.bool.isRequired
};

export default ButtonFilter