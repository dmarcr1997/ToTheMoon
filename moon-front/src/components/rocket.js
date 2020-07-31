import React, {Component} from 'react';

import spaceship from '../spaceship.svg';

class Rocket extends Component{
    state = {
        fuel: this.props.fuel,
        speed: 0,
        start: false,
        mass: 10000,
        c: 3000,
        g: 9.81,
    }
    componentDidMount(){
        this.setState({
            speed: this.getSpeed()
        })
    }
    getSpeed = () => {
        let mass = this.state.mass
        let massNot = this.state.fuel + mass
        let speed  = Math.log((massNot/mass))
        console.log(speed) 
    }
    getWidth = () => {
        return '5%'
    }

    getHeight = () => {
        return '5%'
    }

    getX = () => {
        return '50em'
    }

    getY = () => {
        return '28em'
    }

    getAngle = () => {
        return 'rotate(25deg)'
    }

    render(){
        const rocketStyle = {
            position: 'absolute',
            width: this.getWidth(),
            height: this.getHeight(),
            top: this.getY(),
            left: this.getX(),
            transform: this.getAngle()
        };
        return(
            <img src={spaceship} style={rocketStyle} className='rocket' alt='ship'/>
        )
    }
}

export default Rocket
