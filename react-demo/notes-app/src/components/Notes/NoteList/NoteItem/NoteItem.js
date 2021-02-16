import React from 'react';
import './NoteItem.css';

const NoteItem = (props) => {
    return (
        <div className="col-sm-6 col-md-4">
            <div className="card margin-card">
                <div className="card-header text-center">
                    {props.note.title.toUpperCase()}
                </div>
            </div>

        </div>
    );
}

export default NoteItem;
