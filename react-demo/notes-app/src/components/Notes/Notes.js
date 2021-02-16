import React, { Component } from 'react';
import NoteForm from './NewNoteForm/NoteForm';
import NoteList from './NoteList/NoteList';

class Notes extends Component {
    state = {
        notes : [
            {id: 1, title : "shopping", body : "buy the jeans"},
            {id: 2, title : "grocery", body : "buy the pulses"},
            {id: 3, title : "plants", body : "pot the plants"},
            {id: 4, title : "insurance", body : "renew bike insurance"}
        ]
    }

    onAddNewItem = (title, body ) =>{
        const newNote = {
            title, 
            body, 
            id : this.state.notes.length + 1
        }
        this.setState({
            notes : [...this.state.notes, newNote]
        })

        console.log(this.state.notes);
    }

    render() {
        return (
            <div>
                <NoteList notes = {this.state.notes}/>
                <hr />
                <NoteForm 
                    addNewItem = { (title, body) => this.onAddNewItem(title, body)}/>
            </div>
        );
    }
}

export default Notes;


// rcc
// rfc