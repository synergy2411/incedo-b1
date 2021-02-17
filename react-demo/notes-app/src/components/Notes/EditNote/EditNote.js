import React, { Component } from 'react';

class EditNote extends Component {

    state= {
        body : this.props.note.body
    }

    handleBodyChange = event =>{
        this.setState({
            body : event.target.value
        })
    }

    deleteItem = event => {
        event.preventDefault();
        this.props.onDeleteItem(this.props.note.id);
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2">
                    <div className="card">
                        <div className="card-header">
                            {this.props.note.title.toUpperCase()}
                        </div>
                        <div className="card-body">
                            <form>
                                <label>Edit the Note</label>
                                <input type="text" 
                                    className="form-control" 
                                    value={this.state.body}
                                    onChange={this.handleBodyChange}/>
                                    <br />
                                <div className="row">
                                    <div className="col-sm-4 col-md-4">
                                        <button className="btn btn-primary btn-block">Update</button>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                    <button className="btn btn-warning btn-block">Cancel</button>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                    <button className="btn btn-danger btn-block"
                                        onClick={this.deleteItem}>Delete</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditNote;
