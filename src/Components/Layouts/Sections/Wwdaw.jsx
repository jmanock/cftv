import React from 'react';
import {Grid,Paper} from '@material-ui/core';
import greenPepper from '../../../images/greenPepppercopy.png';

const Wwdaw = () =>{
  const styles = {
    height:'50vh',
    backgroundColor:'#757575'
  }
  return(
    <section className='wwdaw' style={styles}>
      <Grid container>
        <Grid item xs>
          <img src={greenPepper} alt='greenPepper' className='pepper'></img>
          <ol className='list'>
            <li>Provide local resorce information in a video magazine format</li>
          </ol>
        </Grid>
        <Grid item xs>
          <img src={greenPepper} alt='greenPepper' className='pepper'></img>
          <ol className='list'>
            <li>Provide a platform to advertise products, events, and locations to key known audience</li>
          </ol>
        </Grid>
        <Grid item xs>
          <img src={greenPepper} alt='greenPepper' className='pepper'></img>
          <ol className='list'>
            <li>create partnerships with key compainies who have a shared ethos</li>
            <li>In the Future, we will bring on more platforms and more outlets to bring the message to a greater audience</li>
          </ol>
        </Grid>
      </Grid>
    </section>
  );
};

export default Wwdaw;
