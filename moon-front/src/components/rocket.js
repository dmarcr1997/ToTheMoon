import React, {Component} from 'react';
import Ship from './ship';

class Rocket extends Component{
    state = {
        dashes: [],
        fuel: this.props.fuel,
        speed: 0,
        start: false,
        mass: 10000,
        c: 3000,
        g: 9.81,
        ydist: 0,
        xdist: 0,
        q: 10,
        t: 0,
        x: 50,
        y: 28,
        fullDist: (238,9000 * Math.pow(10, -3)), 
        degree: 120
    }
    componentDidMount(){
        this.setState({
            speed: this.getSpeed(),
            ydist: this.getYDistance(),
            xdist: this.getXDistance(),
            time: this.getTime(),
        })
    }

    getTime = () => {
        let {mass, q, c, fuel} = this.state
        let speed = this.getSpeed()
        let time = (((mass+fuel)/mass)/q)*(1-(1/Math.exp(speed/c))) 
        console.log(time)
        return time
    }

    getYDistance = () => {
        let dist = (.5) * Math.pow(this.getSpeed(), 2) * this.state.g
        console.log(dist)
        return dist
    }

    getXDistance = () => {
        return (.5 * Math.cos(25) * this.getTime())
    }

    getSpeed = () => {
        let mass = this.state.mass
        let massNot = this.state.fuel + mass
        let speed  = Math.log((massNot/mass))* Math.pow(10, -3)
        console.log(speed)
        return speed 
    }

    launch = () => {
        let st = this.state.start
        this.setState({
            start:!st
        })
    }

    changeX = (newX) => {
        this.setState({
            x: newX
        })
    }

    
    changeY = (newY) => {
        this.setState({
            y: newY
        })
    }

    changeDeg = newDe => {
        this.setState({
            degree: newDe
        })
    }

    renderRocket = () => {
        if (this.state.start === true){
            return(<Ship changeDeg={this.changeDeg} changeY={this.changeY} changeX={this.changeX} x={this.state.x} y={this.state.y} disX={this.state.xdist} distY={this.state.ydist} speed={this.state.speed} degree={this.state.degree}/>)
        }
        return
    }


    render(){
        
        return(
            <>
                {this.renderRocket()} 
                <button onClick={this.launch}>LiftOff</button>
            </>
        )
    }
}

export default Rocket
