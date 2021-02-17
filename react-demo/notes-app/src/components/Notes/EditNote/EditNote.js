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

    render() {
        return (
            <div className="row">
                <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
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
                                    <div className="col-sm-3 col-md-3">
                                        <button className="btn btn-primary btn-block">Update</button>
                                    </div>
                                    <div className="col-sm-2 col-md-2"></div>
                                    <div className="col-sm-2 col-md-2"></div>
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
