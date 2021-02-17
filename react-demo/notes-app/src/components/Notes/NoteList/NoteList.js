import React, { Component } from 'react';
import NoteItem from './NoteItem/NoteItem';

class NoteList extends Component {
    render() {
        // console.log(this.props.notes);  // 
        let noteItems = this.props.notes.map(note => {
            return <NoteItem note={note} key = {note.id} 
                selectedNote = {id => this.props.onSelectedNote(id)}/>
        })
        return (
            <div className="row">
                {noteItems}
            </div>
        );
    }
}

export default NoteList;
