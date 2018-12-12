import React from 'react';
import {Grid,Paper,Card,Typography,CardContent} from '@material-ui/core';

const Structure = () =>{
  const style ={
    margin:'20px',
    width:'300px',
    textAlign:'center',
  }
  return(
    <section className='structure' style={{height:'50vh'}}>
      <h1 className='title'>CFTV - THE STRUCTURE</h1>
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
          <Paper elevation={3} style={{marginTop:'50px'}}>
            <Card>
              <CardContent style={{height:'30vh'}}>
                <ul>
                  <li>EVENTS ~ Rides, meetups, dealerships</li>
                  <li>LOCATIONS ~ Where to go what todo</li>
                  <li>INTERVIEWS ~ Who is who and what they do</li>
                  <li>TRIPS ~ Document day trips of interest</li>
                  <li>HOLIDAYS ~ Document holidays and things todo</li>
                  <li>ENDORSED PRODUCTS ~ Sponsor products</li>
                  <li>ROLLING MEDIA CHANNEL ~ Includes all the above</li>
                </ul>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Structure;
