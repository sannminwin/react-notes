
import React, { useEffect, useState } from 'react';
import Note from '../Note/Note';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Layout from '../Layout/Layout';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = () => {
  const [notes, setNotes] = useState([]);

  console.log(notes);
  useEffect(() => {
    // Get notes
    axios.get('http://localhost:3001/notes')
    .then((res) => {
      // handle success
      setNotes(res.data);
    })
    .catch((err) => {
      // handle error
      console.log(err);
    })

  },[])

  const refreshData = () => {
      // make api call here
      axios.get('http://localhost:3001/notes')
    .then((res) => {
      // handle success
      setNotes(res.data);
    })
    .catch((err) => {
      // handle error
      console.log(err);
    })
  }

  const renderNotes = (notes) => {
    if(Array.isArray(notes) && notes.length > 0) {
      return notes.map((note) => {
        return (
          <div className="column">
            <Note 
              id={note.id} 
              title={note.title} 
              refresh={refreshData}
              />
          </div>
        )
      })
    } else {
    return <div> Loading... </div> 
    }
  }
  return (
 <Layout>
    <ToastContainer />
     {renderNotes(notes)}
 </Layout>

  )
}
export default Container;
