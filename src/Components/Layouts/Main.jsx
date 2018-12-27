import React,{Fragment} from 'react';
import Intro from './Sections/Intro';
import Agenda from './Sections/Agenda';
import Wwdaw from './Sections/Wwdaw';
import Motovation from './Sections/Motovation';
import Structure from './Sections/Structure';
import Channel from './Sections/Channel';
import Sponsorship from './Sections/Sponsorship';
import Competitors from './Sections/Competitors';
import Calendar from '../Content/Calendar';
import About from '../Content/About';
import Youtube from './Sections/Youtube';
import './main.css';

const Main = () =>{
  return(
    <Fragment>
      <Intro />
      <Agenda />
      <Wwdaw />
      <Motovation />
      <Structure />
      <Channel />
      <Sponsorship />
      <Competitors />
      <h2 className='title'>Events</h2>
      <Calendar />
      <About />
      <Youtube videoId='wp-R57ZaiXY'/>
    </Fragment>
  );
};

export default Main;
