import React, { Component } from 'react';

class RefsDemo extends Component {
    inputRef = React.createRef();

    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log("REF Element - ", this.inputRef.current.value);
    }
    render() {
        return (
            <div>
                <form>
                    <label>Input 1 : </label>
                    <input type="text" ref={this.inputRef} />

                    <button onClick={this.onHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default RefsDemo;
