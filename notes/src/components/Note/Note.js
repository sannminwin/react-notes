import React from 'react';
import Item from '../Item/Item';
import './note.scss';

const Note = (props) => {
    console.log(props);
    const {title, items} = props;

    const editNote = () => {
        alert('editing note');
    }

    const renderItems = (items) => {
        return items.map((item) => {
            return (
                <Item data={item}/>
            )
        })
    }
    return (
        <div class="ui card note">
        <div class="content">
          <div class="header note-header">
    <span class="left floated title">{title}</span>
            <span onClick={editNote} class="right floated edit">
              <i class="edit icon"></i>
            </span>
          </div>
          <div class="description">
            <div class="ui list">
            {renderItems(items)}
            </div>
          </div>
        </div>
        <div class="extra content">
          <span class="left floated plus add-item">
            <i class="plus icon"></i>
            Add Item
          </span>
          <span class="right floated delete note-delete">
            <i class="trash alternate outline icon"></i>
            Delete Note
          </span>
        </div>
      </div>
        )
}

export default Note;