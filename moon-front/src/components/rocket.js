import React, {Component} from 'react';
import { Image } from 'react-canvas';
import spaceship from '../spaceship.svg';

class Rocket extends Component{
    state = {
        fuel: this.props.fuel,
        speed: getSpeed(),
        start: false
    }

    getSpeed = () => {
        if (this.state.fuel <= 0) {
            return 0
        } else return 
    }
    getWidth = () => {
        return '5%'
    }

    getHeight = () => {
        return '5%'
    }

    getX = () => {
        return '100'
    }

    getY = () => {
        return '30'
    }

    render(){
        const rocketStyle = {
            position: 'relative',
            width: this.getWidth(),
            height: this.getHeight(),
            top: this.getX(),
            left: this.getY(),
        };
        return(
            <Image src={spaceship} style={rocketStyle} className='rocket' alt='ship'/>
        )
    }
}

export default Rocket
