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
    render() {
        return (
            <div>
                <NoteList notes = {this.state.notes}/>
                <hr />
                <NoteForm />
            </div>
        );
    }
}

export default Notes;


// rcc
// rfc