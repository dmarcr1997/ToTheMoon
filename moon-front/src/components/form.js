import React,{ Component } from 'react';

class Form extends Component{
    state = {
        fuel: 0,
    }
    handleSub = (event) =>{
        let st = this.state
        debugger
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