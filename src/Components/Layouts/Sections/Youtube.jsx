import React,{Component} from 'react';
import YouTube from 'react-youtube';
class Youtube extends Component{
  videoOnReady(event){
    console.log(event.target);
    event.target.playVideoAt();
  }
  //https://www.youtube.com/watch?v=hHW1oY26kxQ
  render(){
    const opts = {
      height:'390',
      width:'640',
      playerVars:{
        autoplay:1
      }
    }
    const {videoId} = this.props;
    return(
      <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} />
    )
  }
}

export default Youtube
