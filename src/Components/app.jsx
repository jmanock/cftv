import React,{Component, Fragment} from 'react';
import {Header,Footer} from '../Layouts';

class Holder extends Component{
  render(){
    return(
      <Fragment>
          <Header />
          <Footer />
      </Fragment>
    );
  }
}

export default Holder;
