import React from 'react';

const Header = () =>{
  return(
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <a className='navbar-brand' href='#' style={{color:'#963019',fontSize:'2em', marginRight:'100px'}}>CFTv</a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <a href='#' className='nav-link' style={{color:'#f6f1ed',fontSize:'1.2em',marginRight:10}}>Home</a>
          </li>
          <li className='navbar-nav mr-auto'>
            <a href='#About' className='nav-link' style={{color:'#f6f1ed',fontSize:'1.2em',marginRight:10}}>About</a>
          </li>
          <li className='navbar-nav mr-auto'>
            <a href='#Events' className='nav-link' style={{color:'#f6f1ed',fontSize:'1.2em',marginRight:10}}>Events</a>
          </li>
          <li className='navbar-nav mr-auto'>
            <a href='#' className='nav-link' style={{color:'#f6f1ed',fontSize:'1.2em',marginRight:10}}>Cars Tv</a>
          </li>
          <li className='navbar-nav mr-auto'>
            <a href='#' className='nav-link' style={{color:'#f6f1ed',fontSize:'1.2em',marginRight:10}}>Small Town America </a>
          </li>
          <li className='navbar-nav mr-auto'>
            <a href='#' className='nav-link' style={{color:'#f6f1ed',fontSize:'1.2em'}}>Rolling Media</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
