import React, { Component } from 'react';
import { connect, connectAdvanced } from 'react-redux';

class Counter extends Component {
    render() {

        console.log(this.props);

        return (
            <div>
                Counter : {this.props.counter}
            </div>
        );
    }
}

// let connectFunc = connect(mapStateToProps, mapDispatchToProps);

// connectFunc(Counter);

// Map the redux state to component props
const mapStateToProps = (state) => {
    return {
        counter : state.counter
    }
}

// Map the redux actions to component props
const mapDispatchToProps = (state) => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// function connect(mapStateToProps, mapDispatchToProps){
//     return function(ReactComponent){}
// }
