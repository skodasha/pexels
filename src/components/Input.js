import React, { useState } from 'react';
import '../style/Navbar.css';
import {Redirect} from "react-router-dom";

function Input({ style }) {
    const [search, setSearch] = useState('');
    const [key, setKey] = useState(false);

    const onChangeSearch = e => {
        setSearch(e.target.value);
    }

    function handleKeyPress(e){
        if (e.key === 'Enter'){ 
            setKey(true)
        }
    }

    if(key){
        return <Redirect to={`/search?search=${search}`}/>
    }

    return (
        <div className={style}>
            <input placeholder='Search for free photos and videos' onChange={onChangeSearch} onKeyPress={handleKeyPress}/>
            <a href={`/search?search=${search}`} ><button/></a>
        </div>
    )
}

export default Input