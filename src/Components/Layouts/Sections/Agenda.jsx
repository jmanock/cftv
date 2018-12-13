import React from 'react';
import {Grid,Paper,Card,Typography,CardContent} from '@material-ui/core';

const Agenda = () =>{
  const style = {
    margin:'20px'
  }
  return(
    <section className='agenda'>
      <Grid container>
        <Grid xs item style={style}>
          <Paper elevation={3}>
            <Card style={{backgroundColor:'#667467'}}>
              <CardContent>
                <Typography component='h3' style={{color:'#f6f1ed', fontSize:'2em', marginLeft:'20px'}}>OFFERING VALUE CFTV</Typography>
                <ul className='agendaList' style={{fontSize:'1.2em'}}>
                  <li>Cycle Fever Tv</li>
                  <li>Cars Tv</li>
                  <li>Small Town America Tv</li>
                  <li>Rolling Media Channel</li>
                </ul>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid xs item style={style}>
          <Paper elevation={3}>
            <Card style={{backgroundColor:'#667467'}}>
              <CardContent>
                <Typography component='h3' style={{color:'#f6f1ed', fontSize:'2em', marginLeft:'20px'}}>AGENDA</Typography>
                <ul className='agendaList' style={{fontSize:'1.2em'}}>
                  <li>What We Do, and Why</li>
                  <li>The Big Picture</li>
                  <li>The Journey There</li>
                  <li>How you can join us</li>
                </ul>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Agenda;
