import React, {Component} from 'react';
import Asteroid from './asteroid';

class Asteroids extends Component{
    state = {
        asteroids: []
    }

    saveAsteroids = (num) => {
        let count = 0
        let asteroids = []
        while (count < num){
            count++
            asteroids.push({
                id: Date.now(),
            })
        }
        this.setState({
            asteroids: asteroids
        })
    }

    componentDidMount(){
        this.saveAsteroids(this.props.num)
    }


    render(){
        return(
            <div>
                {this.state.asteroids.map(ast => <Asteroid id={ast.id}/>)}
            </div>
        )
    }
}

export default Asteroids
