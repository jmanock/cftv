import React from 'react';
import {Grid,Paper,Card,Typography,CardContent} from '@material-ui/core';

const Channel = () =>{
  const style={
    margin:'20px'
  }
  return(
    <section className='channel' style={{height:'50vh'}}>
      <h2 className='title'>CHANNEL SPONSORSHIP PACKAGES</h2>
      <Grid container>
        <Grid xs item style={style}>
          <Paper elevation={3}>
            <Card style={{backgroundColor:'#667467',height:'35vh'}}>
              <CardContent>
                <Typography component='h3' style={{color:'#f6f1ed',fontSize:'2em', marginLeft:'20px'}}>Package One</Typography>
                <ul className='agendaList' style={{fontSize:'1.1em',marginLeft:-20}}>
                  <li>10k Initial Investment</li>
                  <li>Extra 1k per episode with > 10,000 views</li>
                  <li>Product/Service covered in 5 episodes - Included if reach below 10,000 views</li>
                  <li>Special offers available to viewers</li>
                </ul>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid xs item style={style}>
          <Paper elevation={3}>
            <Card style={{backgroundColor:'#667467',height:'35vh'}}>
              <CardContent>
                <Typography component='h3' style={{color:'#f6f1ed',fontSize:'2em',marginLeft:'20px'}}>Package Two</Typography>
                <ul className='agendaList' style={{fontSize:'1.1em',marginLeft:-20}}>
                  <li>100k investment</li>
                  <li>Product/Service covered in 20 episodes</li>
                  <li>three interviews and product demonstrations created</li>
                  <li>Monthly updates and tweaks</li>
                  <li>Strategic plan for sponsors</li>
                </ul>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Channel;
