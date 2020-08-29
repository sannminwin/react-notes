import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddNote = () => {
    const [title, setTitle] = useState('');
    const history = useHistory();

    console.log(history);

    const addNote = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/notes', {
            title: title,
            items: []
        })
          .then((res) =>  {
            console.log(res);
            history.push('/');
          })
          .catch((err) => {
            console.log(err);
          });

    }
    return (
        <Layout>
            <div class="column">
                <form onSubmit={(e) => addNote(e)} class="ui form">
                <div class="field">
                    <label>Title</label>
                    <input 
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" 
                        name="title" 
                        placeholder="Enter title" />
                </div>
                <button class="ui button" type="submit">Add Note</button>
                </form>
            </div>
        </Layout>
    )
}
export default AddNote;