import React from 'react';
import {Grid,Paper,Card,Typography,CardContent} from '@material-ui/core';

const Cars = () =>{
  const style = {
    margin:'20px'
  }
  return(
    <section className='cars' style={{backgroundColor:'#333'}}>
      <Grid container>
        <Grid xs item style={style}>
          <Paper elevation={3}>
            <Card>
              <CardContent>
                <Typography component='h3' style={{color:'darkred', fontSize:'2em', marginLeft:'20px'}}>OFFERING VALUE CFTV</Typography>
                <ul style={{color:'#333'}}>
                  <li>Cycle Fever Tv</li>
                  <li>Cars Tv</li>
                  <li>Small Town America Tv</li>
                  <li>Rolling Media Channel</li>
                </ul>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid xs item></Grid>
      </Grid>
    </section>
  );
};

export default Cars;
