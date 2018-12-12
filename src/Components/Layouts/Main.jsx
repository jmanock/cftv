import React,{Fragment} from 'react';
import Intro from './Sections/Intro';
import Agenda from './Sections/Agenda';
import Wwdaw from './Sections/Wwdaw';
import Motovation from './Sections/Motovation';
import Structure from './Sections/Structure';
import Channel from './Sections/Channel';
import Sponsorship from './Sections/Sponsorship';
import Competitors from './Sections/Competitors';
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
    </Fragment>
  );
};

export default Main;
