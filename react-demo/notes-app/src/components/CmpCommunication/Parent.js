import React, { Component } from 'react';
import ChildA from './ChildA';

class Parent extends Component {

    display = () => {
        alert("Who's this?");
    }

    render() {
        let age = 32;
        return (
            <div>
                <ChildA name="Foo" age={age} 
                    display={this.display} />
            </div>
        );
    }
}

export default Parent;
