import React, { useEffect } from 'react';
import spaceship from '../spaceship.png';
const Ship = props => {
    function getWidth(){
        return '5%'
    }

    function getHeight(){
        return '5%'
    }

    const rocketStyle = {
        position: 'absolute',
        width: getWidth(),
        height: getHeight(),
        top: `${props.y}em`,
        left: `${props.x}em`,
        transform: `rotate(${props.angle}deg)`
    }

    useEffect(() => {
        const interval = setInterval(() => {
            props.checkIfWon()
            props.checkIfLost()
        }, 1)
        return () => clearInterval(interval);
    }, []);
    return(
        <>
            <img src={spaceship} style={rocketStyle} className='rocket' alt='ship'/>
        </>
    )
}

export default Ship