import React,{useEffect, useState} from 'react';
import asteroid from '../asteroid.svg';
const Asteriod = props => {
    let [angle, updateAng] = useState(0)
    let [X, updateX] = useState(Math.floor(Math.random() * 100))
    let [Y, updateY] = useState(Math.floor(Math.random() * 100))
    const speed = .5
    let aStyle
    useEffect(() => {
        const interval = setInterval(() => {
            updateAng((angle) => {
                angle++
                return angle
            })
            updateX((X) => {
                if (X >= 150){
                    X = 0
                }
                X+= speed
                return X
            })
            updateY((Y) => {
                if (Y >= 60){
                    Y = 0
                }
                Y+= speed
                return Y
            })
            
        }, 1)
        return () => clearInterval(interval);
    }, []);
    
    aStyle = {
        position: 'absolute',
        width: '5%',
        height: '5%',
        top: `${Y}em`,
        left: `${X}em`,
        transform: `rotate(${angle}deg)`
    }

    return(
        <>
            <img src={asteroid} style={aStyle} alt='asteroid'/>
        </>
    )
    
}

export default Asteriod
