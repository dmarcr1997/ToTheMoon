import React from 'react';
import world from './world.svg';
import Rocket from './components/rocket';
import fullmoon from './full-moon.svg';
import { Surface, Image } from 'react-canvas';
import './App.css';

function App() {
  let surfaceWidth = window.innerWidth;
  let surfaceHeight = window.innerHeight;
  return(
    <>
      <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
        <Image src={world} className='earth' alt='earth'/>
        <Rocket/>
        <Image src={fullmoon} className='moon' alt='moon'/>
      </Surface>
    </>
  )
}

export default App;
