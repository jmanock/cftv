import React from 'react';

const Intro = () =>{
  const styles = {
    bcr:{
      color:'white',
      textAlign:'center',
      fontSize:'2em'
    },
    welcome:{
      textAlign:'center',
      fontSize:'6em',
      fontWeight:'bold',
      color:'red'
    },
    adv:{
      textAlign:'center',
      color:'#82b1ff'
    }
  }
  return(
    <section className='intro'>
      <div className='welcome'>
        <h1 style={styles.bcr}>Bikes, Cars, &amp; Rock N Roll</h1>
        <h1 style={styles.welcome}>CF Tv</h1>
        <h1 style={styles.adv}>Join the Adventure &amp; Enjoy the Ride.</h1>
      </div>
    </section>
  );
};

export default Intro;
