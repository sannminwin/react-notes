import React from 'react';
import Item from '../Item/Item';
import './note.scss';

const Note = () => {
    return (
        <>
            <div className="note"> Note </div>
            <Item title="this is title one"/>
            <Item title="this is title two" />
            <Item title="this is title three"/>
            <Item title="this is title four"/>
        </>
        )
}

export default Note;