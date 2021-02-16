import React from 'react';

const ChildA = (props) => {
    console.log("PROPS - ", props);

    return (
        <div>
            <h3>Child A Works.</h3>
            <p>Name : {props.name} </p>
            <p> Age : {props.age} </p>
            <button onClick={() => props.display()} >Click Me</button>
        </div>
    );
}

export default ChildA;
