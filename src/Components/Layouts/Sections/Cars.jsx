import React from 'react';
import {Grid,Paper} from '@material-ui/core';

const Cars = () =>{
  const style = {
    paper:{
      backgroundColor:'#82b1ff',
      height:'50vh',
      marginTop:-20
    }
  }
  return(
    <section className='cars'>
      <div>
        <Grid container>
          <Grid item xs={6}>
            <Paper style={style.paper}>
              <h3>OFFER VALUE CFTV</h3>
              <ul>
                <li>Cycle Fever Tv</li>
                <li>Cars Tv</li>
                <li>Small Town America Tv</li>
                <li>Rolling Media Channel</li>
              </ul>
            </Paper>
          </Grid>
          <div className='triangle-up'></div>
        </Grid>
      </div>
    </section>
  );
};

export default Cars;
