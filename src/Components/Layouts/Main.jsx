import React,{Fragment} from 'react';
import Intro from './Sections/Intro';
import Cars from './Sections/Cars';
import Agenda from './Sections/Agenda';
import Bikes from './Sections/Bikes';
import Wwdaw from './Sections/Wwdaw';
import Motovation from './Sections/Motovation';
import Structure from './Sections/Structure';
import Channel from './Sections/Channel';
import './main.css';

const Main = () =>{
  return(
    <Fragment>
      <Intro />
      <Cars />
      <Agenda />
      <Bikes />
      <Wwdaw />
      <Motovation />
      <Structure />
      <Channel />
    </Fragment>
  );
};

export default Main;
