import React from 'react';
import world from './world.svg';
import Rocket from './components/rocket';
import fullmoon from './full-moon.svg';
import './App.css';

class App extends React.Component{
  state = {
    new: false,
  }
  render(){
    return(
      <>
        <img src={world} className='earth' alt='earth'/>
        <Rocket/>
        <img src={fullmoon} className='moon' alt='moon'/>
      </>
    )
  }
}

export default App;
