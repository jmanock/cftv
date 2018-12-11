import React from 'react';
import {Grid,Paper} from '@material-ui/core';

const Structure = () =>{
  return(
    <div>
      <h1 className='title'>CFTV - The Structure</h1>
      <Grid container>
        <Grid xs={1}>
          <div className='cftvSign'>
            <h3>CFTV</h3>
          </div>
        </Grid>
        <Grid xs={5}>
          <div className='signs'>
            <h3 className='si'>Cycle Fever Tv</h3>
            <h3 className='si'>Porsche Tv</h3>
            <h3 className='si'>Small Town America Tv</h3>
          </div>
        </Grid>
        <Grid xs={6}>
          <div className='def'>
            <ul>
              <li>EVENTS - Rides, meetup, dealerships</li>
              <li>LOCATIONS - Where to go what todo</li>
              <li>INTERVIEWS - Who is who and what they do</li>
              <li>TRIPS - Document day trips of interest</li>
              <li>HOLIDAYS - Document holidays and things todo</li>
              <li>ENDORSED PRODUCTS - Sponsor products</li>
              <li>ROLLING MEDIA CHANNEL - Inculdes all the above</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Structure;
