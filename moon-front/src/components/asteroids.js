import React, {Component} from 'react';

class Asteroids extends Component{
    state = {
        asteroids = []
    }

    saveAsteroids = (num) => {
        let count = 0
        let asteroids = []
        while (count < num){
            count++
            asteroids.push({
                id: Date.now(),
                speed: 5,
                angle: 120,
                x: 100 - (count+5),
                y: 100 - (count+ 5),
            })
        }
        this.setState({
            asteroids: asteroids
        })
    }

    componentDidMount(){
        this.saveAsteroids()
    }

    render(){
        return(
            <>
                
            </>
        )
    }
}
