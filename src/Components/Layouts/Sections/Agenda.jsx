import React from 'react';
import {Grid,Paper} from '@material-ui/core';

const Agenda = () =>{
  const styles = {
    height:'50vh',
    marginTop:-18.5,
    backgroundColor:'#616161',
  }
  return(
    <section className='agenda'>
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs>
          <Paper elevation={3} style={{height:'45vh', marginRight:'20px'}}>
            <h3>AGENDA</h3>
            <ol>
              <li>What We Do, and Why</li>
              <li>The Big Picture</li>
              <li>The Journey There</li>
              <li>How you can Join us</li>
            </ol>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Agenda;
