import React, { Component } from 'react';

class RefsDemo extends Component {
    inputRef = React.createRef();
    state = {
        input2 : ''
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log("REF Element - ", this.inputRef.current.value);
    }

    onInput = (event) => {
        this.setState({
            input2 : event.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    {/* Uncontrolled Element */}
                    <label>Input 1 : </label>
                    <input type="text" ref={this.inputRef} />
                    
                    {/* Ccontrolled Element */}
                    <label>Input 2 : </label>
                    <input type="text" value={this.state.input2} onChange={this.onInput} />

                    <button onClick={this.onHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default RefsDemo;
