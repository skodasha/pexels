import React from 'react';
import Body from '../components/Body';
import Navbar from '../components/Navbar';
import Head from '../components/Head';

function Categories() {
    let search = window.location.search.slice(8);

    return(
        <div>
            <Navbar/>
            <Head title={search}/>
            <Body search={search}/>
        </div>
    )
}

export default Categories