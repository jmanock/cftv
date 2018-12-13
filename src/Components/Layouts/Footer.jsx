import React from 'react';

const Footer = () =>{
  const style={
    margin:20,
  }
  return(
    <footer className='page-footer' style={style}>
      <div className='container'>
        <div className='row'>
          <div className='flex-center'>


          </div>
        </div>
      </div>
      <div className='footer-copyright text-center' style={{backgroundColor:'#182236',color:'#fff'}}>@ 2018 Copyright: CycleFeverTv
        <a href='https://www.facebook.com/CycleFeverTV/' target='_blank'> <i className='fab fa-facebook-f' style={{marginLeft:20,fontSize:30}}></i></a>
      <a href='https://twitter.com/CycleFeverTV' target='_blank'> <i className='fab fa-twitter' style={{marginLeft:20,fontSize:30}}></i></a>
      <a href='https://www.instagram.com/cyclefevertv/' target='_blank'><i className='fab fa-instagram' style={{marginLeft:20,fontSize:30}}></i></a>
      <a href='https://www.youtube.com/channel/UC5lBCpUunSuN3lCxxTfkunA' target='_blank'><i className='fab fa-youtube' style={{marginLeft:20,fontSize:30}}></i></a>
      </div>
    </footer>
  );
};

export default Footer;
