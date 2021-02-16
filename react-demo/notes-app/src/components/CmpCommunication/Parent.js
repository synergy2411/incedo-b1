import React, { Component } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

class Parent extends Component {

    display = () => {
        alert("Who's this?");
    }

    render() {
        let age = "32";
        let email = "test@test.com";

        return (
            <div>
                <ChildA name="Foo" age={age} 
                    display={this.display} />
                    <hr />
                <ChildB email = {email} age={age}/>
                {/* <ChildB email = {email} /> */}
            </div>
        );
    }
}

export default Parent;
