import React, { Component } from 'react';

class ClassBasedCompDemo extends Component{

    constructor(){
        super();
        console.log("Constructor");
        // Date.now()
        // Math.random()
        // Any server call - get, post
        // setState()
    }

    componentDidMount(){
        console.log("Component Did Mount");
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render(){
        // Date.now()
        // Math.random()
        // Any server call - get, post
        // setState()
        console.log("Render")
        return (
            <div className="" class-name="">
                <h3>Class based Component works.</h3>
                {}
            </div>
        )
    }

}

export default ClassBasedCompDemo;