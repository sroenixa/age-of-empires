import React from 'react'
import './Header.scss';
import logo from '../../../assets/img/logo.png'; 
import NavLink from '../NavLink/NavLink';
import { headerLinks } from '../../../config/routeConfig';

const Header = () => {
  return (
    <div className='header'>
        <div className="header-logo">
            <img src={logo} alt={'Logo'} />
        </div>
        <div className="header-nav">
            {headerLinks.map((item,index) => (
                <NavLink key={index} path={item.path} title={item.title}/>
            ))}
        </div>
    </div>
  )
}

export default Header