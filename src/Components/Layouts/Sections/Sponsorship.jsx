import React from 'react';
import {Grid,Paper,Card,CardContent,Typography} from '@material-ui/core';

const Sponsorship = () =>{
  return(
    <section className='sponsorship' style={{height:'50vh'}}>
      <h2 className='title'>SPONSORSHIP PACKAGES - YOUR VALUE FOR ROLLING CONTENT CHANNEL</h2>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Paper elevation={3}>
            <Card>
              <CardContent>
                <Typography component='p'>Rolling Content video stream - 12 hours a day. Content to be provided from current events and archive footage owned by CFTV</Typography>
                <Typography component='p'>16 (30 second) commercials will be shown per hour. Each 'customer' advert will be shown once per hour 12 times a day.</Typography>
                <Typography component='h5'>Options:</Typography>
                <ul>
                  <li>Commitment of one month - $75 a week ($300)</li>
                  <li>Commitment of two months - $50 a week ($400)</li>
                  <li>Commitment of three months - $40 a week ($480)</li>
                </ul>
                <Typography component='p'>To make an advert typically costs $250 - $400, depending on complexity and can be produced on a time and materials basis.</Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </section>
  );
};

export default Sponsorship;
