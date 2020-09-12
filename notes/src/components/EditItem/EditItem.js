import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// desc: "call all my friends and ask them to help me inprove my resume"
// id: "71dv09A"
// noteId: "kIhlWZ8"
// title: "update resume"

const EditItem = () => {
    const [noteId, setNoteId] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [id, setId] = useState('');
     const history = useHistory();
    console.log(history);
     useEffect(() => {
        setNoteId(history.location.state.noteId);
        setTitle(history.location.state.title);
        setDesc(history.location.state.desc);
        setId(history.location.state.id);
     },[])

    //  const hadleOnSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:3001/items', {
    //         noteId: noteId,
    //         title: title,
    //         desc: desc
    //       })
    //       .then((res) => {
    //         history.push('/');
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       })

    //  }
    const hadleOnSubmit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:3001/items/${id}`, {
            title: title,
            desc: desc,
            id: id
        })
        .then((res) => {
            history.push('/');
        })
        .catch((err) => {
            console.log(err);
        })

    }
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
          <button class="ui button" type="submit">Update Item</button>
        </form>
        </div>
    </Layout>
    )
}

export default EditItem;