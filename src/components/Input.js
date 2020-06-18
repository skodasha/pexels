import React, { useState } from 'react';
import '../style/Navbar.css';
import {Redirect} from "react-router-dom";

function Input({ style }) {
    const [search, setSearch] = useState('');

    const onChangeSearch = e => {
        setSearch(e.target.value);
    }

    return (
        <div className={style}>
            <input placeholder='Search for free photos and videos' onChange={onChangeSearch}/>
            <a href={`/search?search=${search}`} ><button/></a>
        </div>
    )
}

export default Input