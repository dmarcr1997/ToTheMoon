import React from 'react';
import world from './world.svg';
import Rocket from './components/rocket';
import Asteroids from './components/asteroids';
import fullmoon from './full-moon.svg';
import './App.css';

class App extends React.Component{
  state = {
    new: false,
  }

  launch = () => {
    let count = 3
    while(count >=0){
      if (count > 0){
        alert(`${count}...`)
      } else {
        alert("Lift Off!")
      }

      count--
    }
    let n = this.state.new
    this.setState({new: !n})
  }

  renderRocket = () => {
    if (this.state.new === false){
      return(<button className='launch' onClick={() => this.launch()}>LiftOff</button>)
    }
    else{
      return(<Rocket/>)
    }
  }

  render() {
    return(
      <div>
        <img src={world} className='earth' alt='earth'/>
        {this.renderRocket()}
        <Asteroids num={50}/>
        <img src={fullmoon} className='moon' alt='moon'/>
      </div>
    )
  }
}

export default App;
