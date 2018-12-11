import React from 'react';
import {Grid,Paper} from '@material-ui/core';

const Motovation = () =>{
  const styles = {
    backgroundColor:'#757575',
    height:'50vh',
  }
  return(
    <section className='motovation'>
        <Grid container>
          <Grid xs={6} style={styles}>
            <h3>What Motivates us?</h3>
            <ul>
              <li>We have over 40 years of TB Production and presenting experience</li>
              <li>We want to do something different</li>
              <li>We want to meet a need from the community</li>
              <li>We want to provide a quality service</li>
              <li>We will follow the technology path for delivery (distribution)</li>
              <li>We are building on our following: Viewers, Followers, Fans</li>
            </ul>
          </Grid>
        </Grid>
    </section>
  );
};

export default Motovation;
