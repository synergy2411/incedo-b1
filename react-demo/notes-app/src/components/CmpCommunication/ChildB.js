import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildB extends Component {
    render() {
        return (
            <div>
                Email : {this.props.email}
                <br />
                Age : {this.props.age}
            </div>
        );
    }
}

ChildB.propTypes = {
    email : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired
}

export default ChildB;
