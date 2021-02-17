import React, {useState, useEffect} from 'react';

const HooksDemo = () => {
    // const [state, setstate] = React.useState(initialState);
    
    let [counter, setCounter] = useState(0);

    // componentDidMount and componentDidUpdate
    useEffect(() => {
        // Any side effect code / async operation
       console.log("Use Effect....");
    });

    return (
        <div>
            <h3>Counter : {counter} </h3>
            <button onClick={() => setCounter(() => counter + 1)}>Increase Counter</button>
        </div>
    );
}

export default HooksDemo;
