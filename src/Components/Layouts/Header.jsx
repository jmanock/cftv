import React from 'react';

const Header = () =>{
  return(
    <nav className='nav-wrapper' style={{backgroundColor:'#f6f1ed'}}>
      <div className='container'>
        <span className='brand-logo'>CFTV</span>
        <ul>
          <li><a href='#About'>About</a></li>
          <li><a href='#Events'>Events</a></li>
          <li><a href='#Cars'>Cars Tv</a></li>
          <li><a href='#SmallTown'>Small Town America Tv</a></li>
          <li><a href='#RollingMedia'>Rolling Media Channel</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
