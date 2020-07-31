import React from 'react';
import Form from './components/form';
import world from './world.svg';
import Rocket from './components/rocket';
import fullmoon from './full-moon.svg';
import './App.css';

class App extends React.Component{
  state = {
    fuel: 0,
    new: false
  }

  addFuel = (f) => {
    this.setState({
      fuel: f,
      new: true
    })
  }

  renderRocket = () => {
    if (this.state.new === true)
      return(<Rocket fuel={this.state.fuel}/>)
    else
      return
  }
  render(){
    return(
      <>
        <img src={world} className='earth' alt='earth'/>
          {this.renderRocket()}
          <img src={fullmoon} className='moon' alt='moon'/>
          <Form add={this.addFuel}/>
      </>
    )
  }
}

export default App;
