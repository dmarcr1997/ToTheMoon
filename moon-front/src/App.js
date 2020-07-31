import React from 'react';
import Form from './components/form';
import world from './world.svg';
import Rocket from './components/rocket';
import fullmoon from './full-moon.svg';
import './App.css';

class App extends React.Component{
  state = {
    fuel: 0
  }

  addFuel = (f) => {
    this.setState({
      fuel: f
    })
    let st = state
    debugger
  }
  render(){
    return(
      <>
        <img src={world} className='earth' alt='earth'/>
          <Rocket/>
          <img src={fullmoon} className='moon' alt='moon'/>
          <Form/>
      </>
    )
  }
}

export default App;
