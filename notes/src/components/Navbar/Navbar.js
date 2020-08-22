import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const addNote = () => {
        alert('adding note');
    }
    return (
        <div className="ui inverted menu">
      <div className="header item">My Notes</div>
      <div className="right menu">
        <div className="item">
          <div className="ui transparent inverted icon input">
            <i className="search icon"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <Link to="/add/note" className="item">Add Note</Link>
      </div>
    </div>
    )
}
export default Navbar;