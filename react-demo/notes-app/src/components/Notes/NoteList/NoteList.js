import React, { Component } from 'react';
import NoteItem from './NoteItem/NoteItem';

class NoteList extends Component {
    render() {
        console.log(this.props);
        let noteItems = this.props.notes.map(note => {
            return <NoteItem note={note} />
        })
        return (
            <div>
                {noteItems}
            </div>
        );
    }
}

export default NoteList;
