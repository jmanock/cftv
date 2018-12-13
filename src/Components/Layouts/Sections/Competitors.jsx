import React from 'react';
import {Grid,Paper,Card,CardContent} from '@material-ui/core';

const Competitors = () =>{
  const style={
    margin:'20px',
  }
  return(
    <section className='competitors' style={{height:'40vh'}}>
      <h2 className='title'>COMPETITORS?</h2>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Paper elevation={3} style={style}>
            <Card style={{height:'20vh', backgroundColor:'#667467'}}>
              <CardContent>
                <ul className='agendaList' style={{fontSize:'1.1em'}}>
                  <li>No one else is doing this today, with this focus and intensity.</li>
                  <li>We have the advantage of cross platform fertilisation of ideas between channels</li>
                </ul>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </section>
  );
};

export default Competitors;
