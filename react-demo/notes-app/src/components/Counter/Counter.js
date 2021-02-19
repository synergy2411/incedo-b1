import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as counterActions from './store/actions/counterActions';

class Counter extends Component {
    render() {
        return (
            <div className="container">
                <p className="display-3 text-center">
                    Counter : {this.props.counter}
                </p>
                <div className="row">
                    <div className="col-sm-3 col-md-3">
                        <button className="btn btn-primary btn-block"
                            onClick={this.props.onIncrease}>Increase</button>
                    </div>
                    <div className="col-sm-3 col-md-3">
                        <button className="btn btn-dark btn-block"
                            onClick={this.props.onDecrease}>Decrease</button>
                    </div>
                    <div className="col-sm-3 col-md-3">
                        <button className="btn btn-success btn-block"
                            onClick={() => this.props.onAdd(10)}>
                            Add
                        </button>
                    </div>
                    <div className="col-sm-3 col-md-3">
                        <button className="btn btn-warning btn-block"
                            onClick={() => this.props.onSubtract(5)}>
                            Subtract
                        </button>
                    </div>
                </div>
                <br />
                {/* Storing Result */}
                <div className="row">
                    <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                        <button className="btn btn-outline-dark btn-block"
                            onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
                    </div>

                    <hr />

                    <ul className="list-group">
                        {this.props.result.map((res, index) => {
                            return <li key={index} className="list-group-item"> {res} </li>
                        })}
                    </ul>

                </div>

            </div>
        );
    }
}
// let connectFunc = connect(mapStateToProps, mapDispatchToProps);
// connectFunc(Counter);
// Map the redux state to component props
const mapStateToProps = (state) => {
    return {
        counter: state.ctr.counter,
        result: state.res.result
    }
}
// Map the redux actions to component props
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: () => {
            dispatch({ type: counterActions.INCREMENT })
        },
        onDecrease: () => {
            dispatch({ type: counterActions.DECREMENT })
        },
        onAdd: value => {
            dispatch({ type: counterActions.ADD, value })
        },
        onSubtract: value => {
            dispatch(counterActions.onSubtract(value))
        },
        onStoreResult: ctr => {
            dispatch(counterActions.onStoreResult(ctr))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// function connect(mapStateToProps, mapDispatchToProps){
//     return function(ReactComponent){}
// }
