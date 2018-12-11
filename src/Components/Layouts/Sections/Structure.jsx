import React from 'react';
import {Grid,Paper,Card,Typography,CardContent} from '@material-ui/core';

const Structure = () =>{
  const style ={
    margin:'20px',
    width:'300px',
    textAlign:'center',
  }
  return(
    <section>
      <h1 className='structureTitle'>CFTV - THE STRUCTURE</h1>
      <Grid container>
        <Grid item xs={1}>
          <div className='cftvSign'>
            <h3>CFTV</h3>
          </div>
        </Grid>
        <Grid item xs={5} style={{paddingLeft:'40px', paddingTop:'40px'}}>
          <Card style={style}>
            <CardContent>
              <Typography component='h3'>Cycle Fever Tv</Typography>
            </CardContent>
          </Card>
          <Card style={style}>
            <CardContent>
              <Typography component='h3'>Porsche Tv</Typography>
            </CardContent>
          </Card>
          <Card style={style}>
            <CardContent>
              <Typography component='h3'>Small Town America Tv</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} style={{height:'40vh', marginRight:'20px'}}>
            <ul>
              <li>EVENTS ~ Rides, meetups, dealerships</li>
              <li>LOCATIONS ~ Where to go what todo</li>
              <li>INTERVIEWS ~ Who is who and what they do</li>
              <li>TRIPS ~ Document day trips of interest</li>
              <li>HOLIDAYS ~ Document holidays and things todo</li>
              <li>ENDORSED PRODUCTS ~ Sponsor products</li>
              <li>ROLLING MEDIA CHANNEL ~ Inculdes all the above</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Structure;
