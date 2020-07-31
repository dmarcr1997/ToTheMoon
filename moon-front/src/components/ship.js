import React, { useState, useEffect } from 'react';
import spaceship from '../spaceship.svg';
const Ship = props => {
    let [xPos, setXpos] = useState(5);
    let [YPos, setYpos] = useState(5);
    let [Deg, setThetpos] = useState(120);
    
    

    function getWidth(){
        return '5%'
    }

    function getHeight(){
        return '5%'
    }


    function getY(){
        let yLoc
        yLoc = `${props.y}em` 
        return yLoc
        
    }

    const rocketStyle = {
        position: 'absolute',
        width: getWidth(),
        height: getHeight(),
        top: `${props.y}em`,
        left: `${props.x}em`,
        transform: `rotate(${Deg}deg)`
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setXpos((xPos) => { 
                xPos += (props.speed*Math.cos(props.degree))
                props.changeX(xPos)
                console.log(`X position: ${xPos}`)
                return xPos
            })
            setYpos((yPos) => {
                let comeBack = false
                if (yPos >= 73)
                    comeBack = true
                yPos += (props.speed*Math.sin(props.degree))
                props.changeY(yPos)
                console.log(`Y position: ${yPos}`)
                return yPos
            })
            setThetpos((Deg, xPos, yPos) => { 
                Deg += .001
                Deg -= .002
                console.log(`Degreee: ${Deg}`)
                props.changeDeg(Deg)
                return Deg
            })
            props.checkIfWon()
            props.checkIfLost()
        }, 1)
        return () => clearInterval(interval);
    }, []);
    return(
        <img src={spaceship} style={rocketStyle} className='rocket' alt='ship'/>
    )
}

export default Ship