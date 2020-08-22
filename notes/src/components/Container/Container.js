
import React, { useEffect, useState } from 'react';
import Note from '../Note/Note';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Layout from '../Layout/Layout';

const Container = () => {
  const [notes, setNotes] = useState([]);

  console.log(notes);
  useEffect(() => {
    // make api call here
    axios.get('http://localhost:3000/notes')
  .then((res) => {
    // handle success
    setNotes(res.data);
  })
  .catch((err) => {
    // handle error
    console.log(err);
  })

  },[])

  const renderNotes = (notes) => {
    if(Array.isArray(notes) && notes.length > 0) {
      return notes.map((note) => {
        return (
          <div className="column">
            <Note id={note.id} title={note.title} items={note.items}/>
          </div>
        )
      })
    } else {
    return <div> Loading... </div> 
    }
  }
  return (
 <Layout>
     {renderNotes(notes)}
 </Layout>

  )
}
export default Container;
