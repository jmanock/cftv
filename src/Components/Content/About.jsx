import React from 'react';
import {Grid,Paper,Card,Typography,CardContent,CardMedia} from '@material-ui/core';
import Hank from '../../images/hank.jpg';
import Shawn from '../../images/shawn1.jpg';

const About = () =>{
  const style = {
    margin:20,
    fontSize:'1.1em'
  }
  return(
    <section className='About' id='About'>
      <Paper elevation={3} style={{backgroundColor:'#667467',margin:20}}>
        <h2 className='title'>About</h2>
        <Typography component='p' style={style}>
          CycleFeverTv is a motocycle travel show with cazy hosts who want you to come along for the ride while they have fun and a few laughs! Join the Adventure and Enjoy the Ride! Follow us on our motorcycle travel adventures.
        </Typography>
        <h3 style={{textAlign:'center', color:'#f6f1ed'}}>Motorcycle Enthusiast</h3>
        <Typography component='p' style={style}>
          Motorcycles, cars, travel, live events, and live concerts! Episodes of Cycle Fever Tv live stream from the Ace every Thursday @ 7:30pm EST sharp! Our history: in 1999, two public school teachers set out to re-discover the American road. With their wives permission of course. Cycle Fever Tv takes a ride across the country from the unique view of a motorcycle. Join our host, Hank Knapp and friends as they travel all around the highways and backroads of The United States experiencing motorcycle culture.
        </Typography>
        <Grid container>
          <Grid item xs style={style}>
            <Card style={{backgroundColor:'#f6f1ed',height:'650px'}}>
              <CardMedia image={Hank} style={{height:200, width:'50%', marginLeft:130,marginTop:50}}></CardMedia>
              <CardContent>
                <Typography variant='h3' className='title'>Hank</Typography>
                <Typography component='p'>
                  CycleFeverTv's Executive Producer and one of the shows's hosts, Hank Knapp is a former school teacher and television producer for 20 years and has been riding for over 55 years. "I've taken some great trips around the country like my Orlando,Florida to Tacoma,Washington ride along with many other trips of a lifetime." Some of them include the Grand Canyon, Lake George,New York and Nashville,Tennessee accompanied by longtime friend and riding buddy Bill Young. Hank and Bill set out on the open road to create adventures of a lifetime... and they did!
                </Typography>
                <Typography component='p'>
                  Hank and Bill decided to take some time off from filming but Hank got the bug for the show once again, so he called Bill to see if he wanted to start shooting once more. Bill called back from the golf course and told Hank he had two reasons he wasn't ready to start filming. First, his golf clubs do not fit on a motorcycle and second, even if they did he couldn't because Shawn bought his bike... The things Shawn will do to get on the show! So Hank decided to move ahead with himself, Shawn(along with Bill's bike), his buddy Gil and Shawn's bestfriend JD to begin a new adventure!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs style={style}>
            <Card style={{backgroundColor:'#f6f1ed',height:'650px'}}>
              <CardMedia style={{height:200, width:'50%', marginLeft:'130px',marginTop:50}} image={Shawn} title='Shawn'/>
              <CardContent>
                <Typography className='title' variant='h3'>Shawn</Typography>
                <Typography component='p'>
                  Well with Shawn Knapp, the apple didn't fall far from the tree! He knew with his first ride sitting on his dad's gas tank up and down the streets in Rochester,New York that he was born to ride. Although he could never understand why there was only one motorcycle you ride and three in the basement in pieces. He started with hsi first dirt bike in the sixth grade when his mother finally gave in to his years of begging and has been riding ever since and started riding street bikes as soon as he got his restricted license. He actually loaned his first bike to JD in High School, and to this day he hasn't got the story from JD on what happened to it... and JD can't seem to remember! He loves hitting the open road with friends and family, his youngest daughter is his best co-pilot and won't let the motorcycle sit in the garage for longer than a week! "God only knows what will happen out and about with my dad, Gil and of course JD!" Like my dad says, he needs a riding partner with more commons sense than he has on a bike!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
};

export default About;
