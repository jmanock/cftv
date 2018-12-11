import React from 'react';
import {Grid,Paper} from '@material-ui/core';
import RaceCar from '../../../images/raceCar.png';

const Competitors = () =>{
  return(
    <section className='competitors'>
      <h1 className='competitorsTitle'>COMPETITORS?</h1>
      <Grid container>
        <Grid item xs={8}>
          <img src={RaceCar} alt='race car' className='raceCar'></img>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3}>
            <ul>
              <li>No one else is doing this today, with this focus and intensity.</li>
              <li>We have the advantage of cross platform fertilsation of ideas between channels</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Competitors;
