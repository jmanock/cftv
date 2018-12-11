import React from 'react';
import {Grid,Paper} from '@material-ui/core';

const Sponsorship = () =>{
  return(
    <section className='sponsorship'>
      <h1 className='sponsorshipTitle'>SPONSORSHIP PACKAGES - YOUR VALUE FOR ROLLING CONTENT CHANNEL</h1>
      <Grid container>
        <Grid xs={2}></Grid>
        <Grid xs={8}>
          <Paper className='sponsorshipContent'>
            <p>Rolling Content video stream - 12 hours a day. Content to be provided from current events and archive footage owned by CFTV.</p>
            <p>16 (30 second) commercials will be shown per hour. Each 'customer' advert will be shown once per hour 12 times a day.</p>
            <ul>
              <li>Commitment of one month - $75 a week ($300)</li>
              <li>Commitment of two months - $50 a week ($400)</li>
              <li>Commitment of three months - $40 a week ($480)</li>
            </ul>
            <p>To make an advert typically costs $250 - $400, depending on complexity and can be produced on a time and materials basis.</p>
          </Paper>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </section>
  );
};

export default Sponsorship;
