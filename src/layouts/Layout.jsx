import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header/Header';
import './Layout.scss';

function Layout() {
  return (
    <div className='main_layout'>
      <Header/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;