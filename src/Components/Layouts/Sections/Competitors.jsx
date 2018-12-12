import React from 'react';
import {Grid,Paper,Card,CardContent,Typography} from '@material-ui/core';
import RaceCar from '../../../images/raceCar.png';

const Competitors = () =>{
  const style={
    margin:'20px',
  }
  return(
    <section className='competitors' style={{height:'50vh'}}>
      <h2 className='title'>COMPETITORS?</h2>
      <Grid container>
        <Grid item xs={8}>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} style={style}>
            <Card style={{height:'30vh'}}>
              <CardContent>
                <ul>
                  <li>No one else is doing this today, with this focus and intensity.</li>
                  <li>We have the advantage of cross platform fertilisation of ideas between channels</li>
                </ul>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Competitors;
