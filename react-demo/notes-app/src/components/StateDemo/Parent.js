import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {

    state = {
        counter : 0
    }

    onIncrement = () => {
        this.setState({
            counter : this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <Child counter={this.state.counter}
                    onIncrease = {this.onIncrement}/>
                
            </div>
        );
    }
}

export default Parent;
