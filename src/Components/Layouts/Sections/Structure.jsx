import React from 'react';
import {Grid,Paper,Card,Typography,CardContent} from '@material-ui/core';

const Structure = () =>{
  const style ={
    margin:'20px',
    width:'300px',
    textAlign:'center',
    backgroundColor:'#667467',
  }
  return(
    <section className='structure' style={{height:'50vh'}}>
      <h1 className='title'>CFTV - THE STRUCTURE</h1>
      <Grid container>
        <Grid item xs={1}>
          <div className='cftvSign'>
            <h3 style={{marginLeft:13}}>CFTV</h3>
          </div>
        </Grid>
        <Grid item xs={5} style={{paddingLeft:'40px', paddingTop:'40px'}}>
          <Card style={style}>
            <CardContent>
              <Typography component='h3' style={{color:'#f6f1ed',fontSize:'1.3em'}}>Cycle Fever Tv</Typography>
            </CardContent>
          </Card>
          <Card style={style}>
            <CardContent>
              <Typography component='h3' style={{color:'#f6f1ed', fontSize:'1.3em'}}>Porsche Tv</Typography>
            </CardContent>
          </Card>
          <Card style={style}>
            <CardContent>
              <Typography component='h3' style={{color:'#f6f1ed', fontSize:'1.3em'}}>Small Town America Tv</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} style={{marginTop:'50px', marginRight:'20px'}}>
            <Card>
              <CardContent style={{height:'35vh',backgroundColor:'#667467', fontSize:'1.2em',marginLeft:-25}}>
                <ul className='structureList'>
                  <li><span className='defList'>EVENTS</span> ~ Rides, meetups, dealerships</li>
                  <li><span className='defList'>LOCATIONS</span> ~ Where to go what todo</li>
                  <li><span className='defList'>INTERVIEWS</span> ~ Who is who and what they do</li>
                  <li><span className='defList'>TRIPS</span> ~ Document day trips of interest</li>
                  <li><span className='defList'>HOLIDAYS</span> ~ Document holidays and things todo</li>
                  <li><span className='defList'>ENDORSED PRODUCTS</span> ~ Sponsor products</li>
                  <li><span className='defList'>ROLLING MEDIA CHANNEL</span> ~ Includes all the above</li>
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
