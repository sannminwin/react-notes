import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddItem = () => {
    const [noteId, setNoteId] = useState(null);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
     const history = useHistory();

     console.log('noteId : ', noteId);
     useEffect(() => {
        setNoteId(history.location.state);
     },[])

     const hadleOnSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/items', {
            noteId: noteId,
            title: title,
            desc: desc
          })
          .then((res) => {
            history.push('/');
          })
          .catch((err) => {
            console.log(err);
          })

     }

     console.log('history from add item : ', history);
    return (
        <Layout>
        <div class="column">
        <form onSubmit={(e) => hadleOnSubmit(e)} class="ui form">
          <div class="field">
            <label>Title</label>
            <input 
                type="text" 
                name="title" 
                placeholder="Enter title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="field">
            <label>Description</label>
            <input 
                type="text" 
                name="description" 
                placeholder="Enter description"     
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <button class="ui button" type="submit">Add Item</button>
        </form>
        </div>
    </Layout>
    )
}

export default AddItem;