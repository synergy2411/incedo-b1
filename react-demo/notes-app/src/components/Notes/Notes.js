import React, { Component } from 'react';
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
            selectedNoteId : null
        })
    }

    onUpdateItem = (id, body) => {
        const noteFound = this.state.notes.find(note => note.id === id);
        noteFound.body = body;
        const duplicateNotes = this.state.notes.filter(note => note.id !== id);
        this.setState({
            notes : [...duplicateNotes, noteFound],
            selectedNoteId : null
        })
    }

    render() {
        let myForm = null;
        let editNote = null;

        if (this.state.selectedNoteId) {
            const note = this.state.notes.find(note => note.id === this.state.selectedNoteId);

            editNote = <EditNote note={note}
                onDeleteItem={id => this.onDeleteItem(id)} 
                cancelItem = {() => this.setState({ selectedNoteId : null})}
                onUpdateItem = { (id, body) => this.onUpdateItem(id, body) }/>
        }



        if (this.state.showForm) {
            myForm = <NoteForm addNewItem={(title, body) => this.onAddNewItem(title, body)} />
        }
        return (
            <div>
                <NoteList notes={this.state.notes}
                    onSelectedNote={id => this.onSelectedNote(id)} />

                <button onClick={() => this.setState({ showForm: !this.state.showForm })}>Show Form</button>

                <hr />
                {myForm}
                {editNote}

            </div>
        );
    }
}

export default Notes;


// rcc
// rfc