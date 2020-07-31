import React,{ Component } from 'react';

class Form extends Component{
    state = {
        fuel: 0,
    }
    handleSub = (event) =>{
        event.preventDefault()
        this.props.add(this.state.fuel)
        this.setState({fuel:0})
    }
    handleChange = event => {
        this.setState({fuel: event.target.value})
    }
    render(){
        return(
            <form className='form' onSubmit={this.handleSub}>
                <label>Input Rocket Fuel</label>
                <input type='number' name='fuel' value={this.state.fuel} onChange={this.handleChange}/>
                <input type='submit'/>
            </form>
        )
    }
}

export default Form