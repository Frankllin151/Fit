"use client"

import React, { useState } from 'react';
import { Sidebar } from './component/Sidebar';


const Header = () => {
  const [isMessageVisible, setMessageVisibility] = useState(false);

  const handleToggle = () => {
    setMessageVisibility(!isMessageVisible);
  };

  return (
    <header>
      <div className={isMessageVisible ? 'header ml-64' : 'header'}>
        
     <p className="list-icon cursor-pointer" onClick={handleToggle}>
     
<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
     </p>
      </div>
      {isMessageVisible && (
        <Sidebar/>
      )}
    </header>
  );
};

export default Header;
