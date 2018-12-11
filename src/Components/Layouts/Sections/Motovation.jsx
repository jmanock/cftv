import React from 'react';
import {Grid,Paper} from '@material-ui/core';

const Motovation = () =>{
  return(
    <section className='motovation'>
      <h1 className='motovationTitle'>WHAT MOTIVATES US?</h1>
        <Grid container>
          <Grid xs={6} item>
            <Paper elevation={3} style={{height:'35vh', marginLeft:'20px', }}>
              <ul>
                <li>We have over 40 years of tb production and presenting experience</li>
                <li>We want to do something different</li>
                <li>We want to meet a need from the community</li>
                <li>We want to provide a quality service</li>
                <li>We will follow the technology path for delivery (distribution)</li>
                <li>We are building on our following: Viewers, Followers, Fans</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
    </section>
  );
};

export default Motovation;
