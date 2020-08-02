import React, {Component} from 'react';
import Ship from './ship';

class Rocket extends Component{
    state = {
        dashes: [],
        velX: .01,
        velY: .01,
        start: false,
        speed: .01,
        rotateSpeed: 1,
        x: 5,
        y: 5, 
        angle: 120,
    }
    componentDidMount(){
        window.addEventListener('keypress', this.moveShip)
    }
    
    launch = () => {
        let st = this.state.launch
        this.setState({
            start:!st
        })
    }

    updateAirPos = (newX, newY, newXVel, newYVel) => {
        this.setState({
            x: newX,
            y: newY,
            velX: newXVel,
            velY: newYVel
        })
    }

    moveShip = (event) => {
        let {velX, velY, angle, x, y, speed, rotateSpeed} = this.state
        let key = event.key
        console.log(key)
        let newAngle
        if (key === "w"){
            console.log(`X:${x} Y:${y} velx:${velX} velY:${velY}`)
            let radians = angle - 180 
            velX += Math.sin(angle)*speed
            velY += Math.cos(angle)*speed
            x += velX
            y += velY
        }
        if (key === "d"){
            angle += rotateSpeed
            console.log(newAngle)
        }   
        if (key === "a"){
            angle += rotateSpeed*-1
            console.log(angle)
        }
  
        this.setState({
            angle: angle,
            velX: velX,
            velY: velY,
            x: x, 
            y: y
        })
    }

    
    checkIfWon = () => {
        let won = false
        if ((this.state.x >= 75 && this.state.x <=80) && (this.state.y >= 39 && this.state.y <= 50)){
            won = true
        } else {
            won = false
        }
        if (won === true){
            alert('You Landed')
            this.setState({
                start: false,
            })
          
        }
    }

    checkIfLost = () => {
        let lost = false
        if (this.state.x < 0 || this.state.x > 100){
            lost = true
        }

        if (this.state.y < 0 || this.state.y > 60){
            lost = true
        }

        if (lost === true){
            alert('You Did not Make it')
            this.setState({
                start: false,
            })
            
        }
    }
    
    renderRocket = () => {
        if (this.state.start === true){
            return(<Ship update={this.updateAirPos} checkIfLost={this.checkIfLost} checkIfWon={this.checkIfWon} x={this.state.x} y={this.state.y} angle={this.state.angle} velX={this.state.velX} velY={this.state.velY}/>)
        }
        return
    }

    render(){
        
        return(
            <div>
                {this.renderRocket()} 
                <button onClick={this.launch}>LiftOff</button>
            </div>
        )
    }
}

export default Rocket
