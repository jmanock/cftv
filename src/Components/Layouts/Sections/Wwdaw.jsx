import React from 'react';
import {Grid,Paper,Card,CardContent} from '@material-ui/core';
import greenPepper from '../../../images/greenPepppercopy.png';

const Wwdaw = () =>{
  const style={
    margin:'20px',
  }
  return(
    <section className='wwdaw' style={{height:'50vh'}}>
      <h2 className='title'>WHAT WE DO, AND WHY</h2>
      <Grid container>
        <Grid item xs style={style}>
          <Paper elevation={3}>
            <Card style={{height:'40vh'}}>
              <CardContent style={{marginTop:'20px'}}>
                <img src={greenPepper} atl='Green Pepper' className='pepper'></img>
                <ul>
                  <li>Provide local resource information in a video magazine format</li>
                </ul>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs style={style}>
          <Paper elevation={3}>
            <Card style={{height:'40vh'}}>
              <CardContent style={{marginTop:'20px'}}>
                <img src={greenPepper} alt='Green Pepper' className='pepper'></img>
                <ul>
                  <li>Provide a platform to advertise products, events, and locations to key known audience</li>
                </ul>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs style={style}>
          <Paper elevation={3}>
            <Card style={{height:'40vh'}}>
              <CardContent style={{marginTop:'20px'}}>
                <img src={greenPepper} alt='Green Pepper' className='pepper'></img>
                <ul>
                  <li>Create partnerships with key compainies who have a shared ethos</li>
                  <li>In the future, we will bring on more platforms and more outlets to bring the message to a greater audience</li>
                </ul>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Wwdaw;
