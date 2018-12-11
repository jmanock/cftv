import React from 'react';
import {Grid,Paper} from '@material-ui/core';

const Channel = () =>{
  return(
    <section className='channel'>
      <h2 className='channelHead'>CHANNEL SPONSORSHIP PACKAGES</h2>
      <Grid container>
        <Grid xs>
          <h3 className='channelTitle'>Package One</h3>
          <ul className='channelList'>
            <li>10k Initial Investment</li>
            <li>Extra 1k per episode with > 10,000 views</li>
            <li>Product/Service covered in 5 Episodes - Included if Reach below 10,000 views</li>
            <li>Special Offers available to viewers</li>
          </ul>
        </Grid>
        <Grid xs>
          <h3 className='channelTitle'>Package Two</h3>
          <ul className='channelList'>
            <li>100k investment</li>
            <li>Product/Service Covered in 20 episodes</li>
            <li>Three interviews and product demonstrations created</li>
            <li>Monthly updates and tweaks</li>
            <li>Strategic Plan for sponsor</li>
          </ul>
        </Grid>
      </Grid>
    </section>
  );
};

export default Channel;
