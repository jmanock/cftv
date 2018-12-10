import React, { Component,Fragment } from 'react';
import './App.css';
import {Header, Footer} from './Components/Layouts';
import Main from './Components/Layouts/Main';

class App extends Component {
  render() {
    return (
        <Fragment>
          <Header />
          <Main />
          <Footer />
        </Fragment>
    );
  }
}

export default App;
