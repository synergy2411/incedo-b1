import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import EditNote from './EditNote/EditNote';
import NoteForm from './NewNoteForm/NoteForm';
import NoteList from './NoteList/NoteList';

class Notes extends Component {
    state = {
        notes: [
            { id: 1, title: "shopping", body: "buy the jeans" },
            { id: 2, title: "grocery", body: "buy the pulses" },
            { id: 3, title: "plants", body: "pot the plants" },
            { id: 4, title: "insurance", body: "renew bike insurance" }
        ],
        showForm: false,
        selectedNoteId: null
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log("RESPONSE - ", response);
                this.setState({
                    notes: response.data.slice(0, 6)
                })
            }).catch(err => {
                console.log("ERROR - ", err);
            })
    }

    onAddNewItem = (title, body) => {
        const newNote = {
            title,
            body,
            id: this.state.notes.length + 1
        }
        this.setState({
            notes: [...this.state.notes, newNote]
        })
    }

    onSelectedNote = id => {
        console.log("Selected Note Id - ", id);
        this.setState({
            selectedNoteId: id
        })
    }

    onDeleteItem = id => { // id =3
        const duplicateNotes = this.state.notes.filter(note => note.id !== id);
        // console.log("DUPLICATE NOTES - ", duplicateNotes);
        this.setState({
            notes: [...duplicateNotes],
            selectedNoteId: null
        })
    }

    onUpdateItem = (id, body) => {
        const noteFound = this.state.notes.find(note => note.id === id);
        noteFound.body = body;
        const duplicateNotes = this.state.notes.filter(note => note.id !== id);
        this.setState({
            notes: [...duplicateNotes, noteFound],
            selectedNoteId: null
        })
    }

    render() {
        let myForm = null;
        let editNote = null;

        if (this.state.selectedNoteId) {
            const note = this.state.notes.find(note => note.id === this.state.selectedNoteId);

            editNote = <EditNote note={note}
                onDeleteItem={id => this.onDeleteItem(id)}
                cancelItem={() => this.setState({ selectedNoteId: null })}
                onUpdateItem={(id, body) => this.onUpdateItem(id, body)} />
        }
        // if (this.state.showForm) {
        //     myForm = <NoteForm addNewItem={(title, body) => this.onAddNewItem(title, body)} />
        // }
        return (
            <div>

                <Router>
                    <ul>
                        <li>
                            <Link to="/notes/note-form">New Note Form</Link>
                        </li>
                        <li>
                            <Link to="/notes/edit">Edit Note</Link>
                        </li>
                    </ul>





                    <hr />

                    <Switch>
                        <Route exact path="/notes">
                            <NoteList notes={this.state.notes}
                                onSelectedNote={id => this.onSelectedNote(id)} />
                            <button className="btn btn-outline-dark btn-block"
                                onClick={() => this.setState({ showForm: !this.state.showForm })}>
                                {this.state.showForm ? "Hide Form" : "Show Form"}
                            </button>
                        </Route>
                        <Route exact path="/notes/note-form">
                            <NoteForm addNewItem={(title, body) => this.onAddNewItem(title, body)} />
                        </Route>
                        <Route exact path="/notes/edit">
                            {editNote}
                        </Route>
                    </Switch>
                </Router>


            </div>
        );
    }
}

export default Notes;


// rcc
// rfc