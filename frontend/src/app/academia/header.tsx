"use client"

import React, { useState, useEffect } from 'react';
import { Sidebar } from './component/Sidebar';
import PropTypes from 'prop-types';

type Props = {
  isSidebarActive: boolean;
  handleSidebarToggle: () => void;
};


const Header = ({ isSidebarActive, handleSidebarToggle }: Props)=> {
  
  
  

 

  return (
    <header>
      <div className={isSidebarActive ? 'header ml-64' : 'header'}>
        
     <p className="list-icon cursor-pointer" onClick={handleSidebarToggle}>
     
<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
     </p>
      </div>
      {isSidebarActive && <Sidebar />}
    </header>
  );
};

Header.propTypes = {
  isSidebarActive: PropTypes.bool.isRequired,
  handleSidebarToggle: PropTypes.func.isRequired,
};

export default Header;
