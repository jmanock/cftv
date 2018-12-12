import React from 'react';
import {Grid,Paper,Card,CardContent} from '@material-ui/core';

const Motovation = () =>{
  const style = {
    margin:'20px'
  }
  return(
    <section className='motovation' style={{height:'50vh'}}>
      <h2 className='title'>WHAT MOTIVATES US?</h2>
      <Grid container>
        <Grid item xs={6} style={style}>
          <Paper elevation={3}>
            <Card>
              <CardContent>
                <ul>
                  <li>We have over 40 years of TV production and presenting experience</li>
                  <li>We want to do something different</li>
                  <li>We want to meet a need from the community</li>
                  <li>We want to provide a quality service</li>
                  <li>We will follow the technology path for delivery (distribution)</li>
                  <li>We are building on our following: Viewers, Followers, Fans</li>
                </ul>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Motovation;
