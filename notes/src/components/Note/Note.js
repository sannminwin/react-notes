import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import './note.scss';
import axios from 'axios';
import AddItem from '../AddItem/AddItem';
import { useHistory } from 'react-router-dom';

const Note = (props) => {
  const {id, title, refresh} = props;
  const [note, setNote] = useState({});
  const [newTitle, setNewTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [items, setItems] = useState([]);

  const history = useHistory();

  console.log('history : ', history);

  useEffect(() => {
    axios.get(`http://localhost:3001/items?noteId=${id}`)
    .then((res) => {
      setItems(res.data);
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  const addItem = (noteId) => {
    history.push('/add/item', noteId )
  }

  console.log(newTitle);
  

    const editNote = (id) => {
        setIsEditing(!isEditing);
    }
    const saveNote = (id, title) => {
      setIsEditing(!isEditing);
      axios.patch(`http://localhost:3001/notes/${id}`, {
        title: title
      })
      .then((res) => {
        // do something
        refresh();
      })
      .catch((err) => {
        console.log(err);
      })

    }

    const deleteNote = (id) => {
      axios.delete(`http://localhost:3001/notes/${id}`)
      .then(() => {
        refresh();
      })
      .catch((err) => {
        console.log(err);
      })

  }


    const renderItems = (items) => {
        return items.map((item) => {
            return (
                <Item data={item} refresh={refresh}/>
            )
        })
    }

    return (
        <div class="ui card note">
        <div class="content">
          <div class="header note-header">
            {( isEditing && 
            <>
              <div class="field">
                    <input 
                        onChange={(e) => setNewTitle(e.target.value)}
                        type="text" 
                        name="title" 
                        placeholder={title} />
              </div>

              <button onClick={() => saveNote(id, newTitle)} class="ui primary button right floated">
                Save
              </button>
            </>
            )}
            {( !isEditing && 
              <> 
                <span onDoubleClick={() => editNote()}  class="left floated title">{title}</span>
                <span onClick={() => editNote()} class="right floated edit">
                  <i class="edit icon"></i>
                </span>
              </>
            )}
          </div>
          <div class="description">
            <div class="ui list">
            {renderItems(items)}
            </div>
          </div>
        </div>
        <div class="extra content">
          <span onClick={() => addItem(id)} class="left floated plus add-item">
            <i class="plus icon"></i>
            Add Item
          </span>
          <span onClick={() => deleteNote(id)} class="right floated delete note-delete">
            <i class="trash alternate outline icon"></i>
            Delete Note
          </span>
        </div>
      </div>
        )
}

export default Note;