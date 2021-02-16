import React, { Component } from 'react';

class NoteForm extends Component {

    state = {
        title : '',
        body : ''
    }


    onTitleChange = (event) => {
        // console.log(event.target.value)
        this.setState({
            title : event.target.value
        })
    }
    onBodyChange = (event) => {
        this.setState({
            body : event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        const title = this.state.title;
        const body = this.state.body;
        this.props.addNewItem(title, body)
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-3">
                    <form>
                        <div className="form-group">
                            <label>Title : </label>
                            <input type="text" 
                                className="form-control" 
                                value={this.state.title}
                                onChange = {this.onTitleChange} />
                        </div>
                        <div className="form-group">
                            <label>Body : </label>
                            <input type="text" 
                                className="form-control" 
                                value={this.state.body} 
                                onChange = {this.onBodyChange}/>
                        </div>
                        <button className="btn btn-success btn-block"
                            onClick = {this.handleClick}>Add New Item</button>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default NoteForm;
