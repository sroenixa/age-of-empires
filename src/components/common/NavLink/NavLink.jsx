import React from 'react'
import { Link,useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; 
import './NavLink.scss';

const NavLink = ({ path, title }) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  
  return (
    <Link className={`${isActive ? 'active' : ''} nav-link`} to={path}>{title}</Link>
  )
}

NavLink.propTypes = {
  path: PropTypes.string.isRequired,  
  title: PropTypes.string.isRequired,
};

export default NavLink