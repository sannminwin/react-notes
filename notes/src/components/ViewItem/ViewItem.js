import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import { useHistory, Link } from 'react-router-dom';

const ViewItem = () => {
    const [item, setItem] = useState(null);
    const histroy = useHistory();
    useEffect(() => {
        setItem(histroy.location.state);
    },[])
    console.log( histroy);
    return (
        <Layout>
            <div> 
                {( item !== null &&
                <>
                    <div>  Title: {item.title} </div>
                    <div>  Description: {item.desc} </div>   
                    <Link to="/"> see all items </Link>
                </>
                )}
            </div>
        </Layout>
    )
}

export default ViewItem;