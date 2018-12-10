import React,{Fragment} from 'react';
import Intro from './Sections/Intro';
import Cars from './Sections/Cars';
import Agenda from './Sections/Agenda';
import Bikes from './Sections/Bikes';
import Wwdaw from './Sections/Wwdaw';
import './main.css';

const Main = () =>{
  return(
    <Fragment>
      <Intro />
      <Cars />
      <Agenda />
      <Bikes />
      <Wwdaw />
    </Fragment>
  );
};

export default Main;
