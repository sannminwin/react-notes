import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = (props) => {
    return (
        <>
        <Navbar />
        <div className="ui four column doubling stackable grid container">
            {props.children}
        </div>
        </>
    )
    
}

export default Layout;