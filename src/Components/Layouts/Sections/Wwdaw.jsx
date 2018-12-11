import React from 'react';
import {Grid,Paper} from '@material-ui/core';
import greenPepper from '../../../images/greenPepppercopy.png';

const Wwdaw = () =>{
  const style={
    margin:'20px',
  }
  return(
    <section className='wwdaw' style={{height:'50vh'}}>
      <h1 className='wwdawTitle'>WHAT WE DO, AND WHY</h1>
      <Grid container>
        <Grid item xs style={style}>
          <Paper elevation={3} style={{height:'35vh'}}>
            <img src={greenPepper} alt='greenPepper' className='pepper'></img>
            <ol className='list'>
              <li>Provide local resource information in a video magazine format</li>
            </ol>
          </Paper>
        </Grid>
        <Grid item xs style={style}>
          <Paper elevation={3} style={{height:'35vh'}}>
            <img src={greenPepper} alt='Green Pepper' className='pepper'></img>
            <ol className='list'>
              <li>Provide a platform to advertise products, events, and locations to key known audience</li>
            </ol>
          </Paper>
        </Grid>
        <Grid item xs style={style}>
          <Paper elevation={3} style={{height:'35vh'}}>
            <img src={greenPepper} alt='Green Pepper' className='pepper'></img>
            <ol className='list'>
              <li>Create partnerships with key compainies who have a shared ethos</li>
              <li>In the future, we will bring on more platforms and more outlets to brin the message to a greater audience</li>
            </ol>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Wwdaw;
